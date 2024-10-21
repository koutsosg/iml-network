CREATE TABLE podcasts2 (
  id UUID PRIMARY KEY,
  title VARCHAR(255),
  description TEXT,
  copyright VARCHAR(255),
  guid VARCHAR(255) UNIQUE,
  funding_url VARCHAR(255),
  language VARCHAR(10),
  pub_date TIMESTAMP,
  transistor_url VARCHAR(255),
  image_url VARCHAR(255),
  image_title VARCHAR(255),
  image_link VARCHAR(255),
  author VARCHAR(255),
  categories TEXT[],
  keywords TEXT[],
  owner_name VARCHAR(255),
  owner_email VARCHAR(255)
);
