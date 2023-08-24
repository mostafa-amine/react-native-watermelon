import { tableSchema } from "@nozbe/watermelondb";

export const ShoppItemSchema = tableSchema({
    name: 'itens_compras',
    columns: [
        {
            name: 'Item',
            type:'string'
        },
        {
            name: 'prioridade',
            type: "string"
        },
        {
            name: 'check',
            type: 'boolean'
        }
    ]
})