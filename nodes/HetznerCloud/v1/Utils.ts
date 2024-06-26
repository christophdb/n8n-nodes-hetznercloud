import type { IExecuteFunctions, ILoadOptionsFunctions } from 'n8n-workflow';
import { OptionsWithUri } from 'request';
/*
// takes in an array of {key:string,value:any} objects and converts them to
someObject:{
    key1:value1,
    key2:value2,
    ...
}
mainly for creating the labels
*/
export function createDynamicObject(objects: { key: string; value: any }[]): {
	[key: string]: any;
} {
	const dynamicObject: { [key: string]: any } = {};
	for (const e of objects) {
		dynamicObject[e.key] = e.value;
	}
	return dynamicObject;
	//"test"
}

/* 
- This Function recursively calls itself incrementing page till 
last_page reached and then returns an Array of all the received data appended

- data is the array returned in list api calls for example.
This means data would contain all firewalls directly instead of something.firewalls
returned by the api from options, the data gets recursively appended

- arraymergekey specifies which key is array that should be appended to data 
	example: when calling firewalls api {"firewalls":[...]} is returned, arraymergekey would be "firewalls"

- credentialsType is just the credentials name in n8

- instance can be  ILoadOptions for loadOptions.ts
instance can also be IExecuteFunctions for the normal actions like: list firewall

This function needs a sensible timeout in options, because the api might not respond fast enough, which will throw
ETIMEDOUT
*/
export async function helpPaginate(
	instance: ILoadOptionsFunctions | IExecuteFunctions,
	credentialsType: string,
	options: OptionsWithUri,
	data: any[],
	arraymergekey: string,
): Promise<any[]> {
	try {
		let result = await instance.helpers.requestWithAuthentication.call(
			instance,
			credentialsType,
			options,
		);
		console.log(result);
		if (options.qs.page === null) {
			options.qs.page = 1;
		}
		//console.log(options.qs.page);
		if (!result[arraymergekey]) {
			//console.log(arraymergekey + 'does not exist on result');
			return Promise.resolve(data);
		}
		if (!result.meta.pagination) {
			//	console.log('no Pagination');
			return Promise.resolve(data);
		}

		if (
			result.meta.pagination.page >= result.meta.pagination.last_page ||
			result.meta.pagination.next_page === null
		) {
			//	console.log('last page', result.meta.pagination.last_page);
			data = data.concat(result[arraymergekey]);
			return Promise.resolve(data);
		} else {
			data = data.concat(result[arraymergekey]);
			options.qs.page = result.meta.pagination.next_page;
			return helpPaginate(instance, credentialsType, options, data, arraymergekey);
		}
	} catch (error) {
		console.log(error);
		return Promise.resolve(data);
	}
}
