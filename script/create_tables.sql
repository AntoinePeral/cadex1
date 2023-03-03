CREATE TABLE IF NOT EXISTS name
(
    id integer NOT NULL GENERATED ALWAYS AS IDENTITY PRIMARY KEY, 
    label text NOT NULL
);

CREATE TABLE IF NOT EXISTS adjective
(
    id integer NOT NULL GENERATED ALWAYS AS IDENTITY PRIMARY KEY, 
    label text NOT NULL
);

CREATE TABLE IF NOT EXISTS verb
(
    id integer NOT NULL GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    label text NOT NULL
);

CREATE TABLE IF NOT EXISTS complement
(
    id integer NOT NULL GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    label text NOT NULL
);

CREATE TABLE IF NOT EXISTS correction
(
    id integer NOT NULL GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    correction text ,
    sentence text NOT NULL,
    rate integer DEFAULT 0,
    name_id integer NOT NULL REFERENCES name(id),
    adjective_id integer NOT NULL REFERENCES adjective(id),
    verb_id integer NOT NULL REFERENCES verb(id),
    complement_id integer NOT NULL REFERENCES complement(id)
);
