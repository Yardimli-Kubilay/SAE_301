/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("s4dggjoayh6h9b6")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "7kgocjim",
    "name": "id_user",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("s4dggjoayh6h9b6")

  // remove
  collection.schema.removeField("7kgocjim")

  return dao.saveCollection(collection)
})
