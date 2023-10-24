/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("s4dggjoayh6h9b6")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "tbluhvnk",
    "name": "materiau_cadre",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "3wk2zjyhv1ndi4j",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "udbckdbc",
    "name": "materiau_verre",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "3wk2zjyhv1ndi4j",
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
  collection.schema.removeField("tbluhvnk")

  // remove
  collection.schema.removeField("udbckdbc")

  return dao.saveCollection(collection)
})
