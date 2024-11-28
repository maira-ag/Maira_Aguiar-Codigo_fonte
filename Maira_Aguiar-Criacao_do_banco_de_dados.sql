CREATE TABLE usuarios (
    id_usuario SERIAL PRIMARY KEY, 
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
); 

CREATE TABLE tarefas (
    id_tarefa SERIAL PRIMARY KEY, 
    descricao TEXT NOT NULL,
    setor VARCHAR(255),
    id_usuario INT, 
    status VARCHAR(50) DEFAULT 'a fazer',
    prioridade VARCHAR(50) DEFAULT 'média',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_usuario FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario) ON DELETE SET NULL
);
