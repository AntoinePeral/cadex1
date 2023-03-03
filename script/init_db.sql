-- je supprime l'existant
DROP DATABASE IF EXISTS cadex;
DROP ROLE IF EXISTS admin_cadex;


-- je crèe l'administrateur
CREATE ROLE admin_cadex WITH LOGIN PASSWORD 'cadex';

-- je crèe la bdd
CREATE DATABASE cadex WITH OWNER = admin_cadex;