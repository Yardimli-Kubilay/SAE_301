/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "cl5egyp8ka4ocvl",
    "created": "2023-10-26 08:42:29.228Z",
    "updated": "2023-10-26 08:42:29.228Z",
    "name": "lunette_enregistrer_par_user",
    "type": "view",
    "system": false,
    "schema": [
      {
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
      },
      {
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
      },
      {
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
      },
      {
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
      },
      {
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
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {
      "query": "SELECT (ROW_NUMBER() OVER()) as id, users.email as nom_utilisateur, lunette.cadre_couleur as couleur_cadre, lunette.verre_couleur as couleur_verre, lunette.prix as prix, lunette.cadre_type as type_cadre  FROM lunette, users\nWHERE lunette.enregistrer = TRUE AND lunette.id_user = users.id\nGROUP BY users.id"
    }
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("cl5egyp8ka4ocvl");

  return dao.deleteCollection(collection);
})
