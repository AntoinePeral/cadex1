# Initialisation de la BDD
psql -U postgres -f script/init_db.sql 

# Création des tables
psql -U admin_cadex -d cadex -f script/create_tables.sql 