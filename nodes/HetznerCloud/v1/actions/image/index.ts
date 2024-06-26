import * as list from './list';
import * as remove from './remove';
import * as get from './get';
import * as update from './update';

import type { INodeProperties } from 'n8n-workflow';

export { list, remove, get, update };
export const descriptions: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['image'],
			},
		},
		options: [
			{
				name: 'List',
				value: 'list',
				description:
					'Returns all Image objects. You can select specific Image types only and sort the results by using URI parameters.',
				action: 'Get all Images',
			},
			{
				name: 'Remove',
				value: 'remove',
				description: 'Removes an Image by ID',
				action: 'Remove Image by ID',
			},
			{
				name: 'Get',
				value: 'get',
				description: 'Gets an Image by ID',
				action: 'Get Image by ID',
			},
			{
				name: 'Update',
				value: 'update',
				description: 'Updates an Image by ID',
				action: 'Update an Image by ID',
			},
		],
		default: 'list',
	},
	...list.description,
	...remove.description,
	...get.description,
	...update.description,
];
