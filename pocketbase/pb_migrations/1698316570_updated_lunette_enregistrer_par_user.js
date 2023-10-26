/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("cl5egyp8ka4ocvl")

  collection.options = {
    "query": "SELECT (ROW_NUMBER() OVER()) as id, users.username as user,lunette.branche_couleur as branche_couleur, lunette.cadre_couleur as cadre_couleur, lunette.verre_couleur as verre_couleur from lunette, users\nWHERE lunette.enregistrer=TRUE"
  }

  // remove
  collection.schema.removeField("gxce2x2t")

  // remove
  collection.schema.removeField("8piqg2pq")

  // remove
  collection.schema.removeField("ory5axwi")

  // remove
  collection.schema.removeField("ouilhmzm")

  // remove
  collection.schema.removeField("w6vfqdwo")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "pdigfopw",
    "name": "user",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "pozdnwvq",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wu49cx4h",
    "name": "cadre_couleur",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "3ljj96zu",
    "name": "verre_couleur",
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
  const collection = dao.findCollectionByNameOrId("cl5egyp8ka4ocvl")

  collection.options = {
    "query": "SELECT (ROW_NUMBER() OVER()) as id, users.email as nom_utilisateur, lunette.cadre_couleur as couleur_cadre, lunette.verre_couleur as couleur_verre, lunette.prix as prix, lunette.cadre_type as type_cadre  FROM lunette, users\nWHERE lunette.enregistrer = TRUE AND lunette.id_user = users.id\nGROUP BY users.id"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "gxce2x2t",
    "name": "nom_utilisateur",
    "type": "email",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "exceptDomains": null,
      "onlyDomains": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "8piqg2pq",
    "name": "couleur_cadre",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ory5axwi",
    "name": "couleur_verre",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ouilhmzm",
    "name": "prix",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "w6vfqdwo",
    "name": "type_cadre",
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

  // remove
  collection.schema.removeField("pdigfopw")

  // remove
  collection.schema.removeField("pozdnwvq")

  // remove
  collection.schema.removeField("wu49cx4h")

  // remove
  collection.schema.removeField("3ljj96zu")

  return dao.saveCollection(collection)
})
