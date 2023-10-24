/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("s4dggjoayh6h9b6")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "gyjh8dhd",
    "name": "enregistrer",
    "type": "bool",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "lybnipwl",
    "name": "commander",
    "type": "bool",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("s4dggjoayh6h9b6")

  // remove
  collection.schema.removeField("gyjh8dhd")

  // remove
  collection.schema.removeField("lybnipwl")

  return dao.saveCollection(collection)
})
