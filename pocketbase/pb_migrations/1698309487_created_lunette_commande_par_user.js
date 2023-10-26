/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "0kz8udt06tkhvqd",
    "created": "2023-10-26 08:38:07.291Z",
    "updated": "2023-10-26 08:38:07.291Z",
    "name": "lunette_commande_par_user",
    "type": "view",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "300rjhtg",
        "name": "user",
        "type": "email",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "exceptDomains": null,
          "onlyDomains": null
        }
      },
      {
        "system": false,
        "id": "vstjs8my",
        "name": "Cadre_couleur",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "nxpxtjqn",
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
      },
      {
        "system": false,
        "id": "vzjffrup",
        "name": "cadre_type",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "moygxres",
        "name": "Prix",
        "type": "number",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "noDecimal": false
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {
      "query": "SELECT (ROW_NUMBER () OVER()) as id, users.email as user, lunette.cadre_couleur as Cadre_couleur, lunette.verre_couleur as verre_couleur, lunette.cadre_type as cadre_type, lunette.prix as Prix\nFROM lunette, users\nWHERE lunette.enregistrer = TRUE AND lunette.id_user =\nusers.id\nGROUP BY users.id"
    }
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("0kz8udt06tkhvqd");

  return dao.deleteCollection(collection);
})
