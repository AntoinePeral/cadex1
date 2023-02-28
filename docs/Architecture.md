# Architecture

La notion d'architecture en informatique est une notion qui peut s'appliquer dans différents contextes :

- physique : on parle par exemple d'architecture physique quand on parle des liens existants entre des serveurs...
- logicielle : les modules ou les technologies utilisés dans notre application Web...

L'**architecture** vient décrire l'**organisation** mise en place.

## Architecture au niveau des dossiers

Depuis le socle, on a pris l'habitude de placer l'ensemble des fichiers nécessaires pour faire fonctionner notre application dans un dossier nommé "app".

C'est une bonne pratique car nous savons où sont rangés directement nos fichiers. C'est un point de repère.

Suivant le projet, l'entreprise, il est fort probable qu'un tel dossier portera un nom différent, il n'en restera pas moins que son utilité sera la même.

Comprendre une architecture, une logique de mise en place, c'est arriver à pouvoir appréhender plus facilement une nouvelle logique.

## Service

Un service est un module qui va traiter une tâche en particulier, par exemple :

- un service de mail : gestion de l'envoi/réception des mails
- un service de validation : service qui va permettre la validation de données

Un service va pouvoir être réutilisable, il n'est pas lié à un contexte particulier.

### Microservice

C'est un service mais en plus petit !

Par exemple :

- un microservice qui envoie des mails