Aplicação em node feita no curso Explorer, utilizando Node, Express, Nodemon, Knex, Sqlite, JavaScript, Insomnia e Beekeeper Studio.

A aplicação possui um banco de dados relacional com três tabelas: users, movie_notes e movie_tags.

#utilizando o insomnia
A ideia é adicionar um usuário na tabela users;
Depois, adicionar notas de filmes relativas a cada usuário, armazenas na tabela movie_notes;
E cada nota de filme poderá receber tags, estas tags ficarão armazenadas na tabela movie_tags.

Campos da tabela users: id, name, email, password, avatar, data de criação e data de update.
Campos da tabela movie_notes: id, titulo, descrição, nota, id do usuario data de criação e data de update.
Campos da tabela movie_tags: id, movi_notes id, id do usuario e nome da tag.
