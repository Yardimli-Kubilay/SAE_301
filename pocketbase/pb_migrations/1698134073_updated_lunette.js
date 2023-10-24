/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("s4dggjoayh6h9b6")

  collection.name = "Lunette"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("s4dggjoayh6h9b6")

  collection.name = "lunette"

  return dao.saveCollection(collection)
})
