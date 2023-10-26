/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("s4dggjoayh6h9b6")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "m3kwo1ty",
    "name": "branche_couleur",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("s4dggjoayh6h9b6")

  // remove
  collection.schema.removeField("m3kwo1ty")

  return dao.saveCollection(collection)
})
