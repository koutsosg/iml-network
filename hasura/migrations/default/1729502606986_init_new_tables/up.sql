-- Create podcasts table
CREATE TABLE podcasts (
  id UUID PRIMARY KEY,
  title VARCHAR(255),
  description TEXT,
  copyright VARCHAR(255),
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

-- Create persons table
CREATE TABLE persons (
  id SERIAL PRIMARY KEY,  -- Keep SERIAL as the type for this table
  name VARCHAR(255),
  role VARCHAR(100),
  href VARCHAR(255),
  img VARCHAR(255)
);

-- Create episodes table with UUID for podcast_id
CREATE TABLE episodes (
  id UUID PRIMARY KEY,
  title VARCHAR(255),
  season INT,
  episode_type VARCHAR(50),
  link VARCHAR(255),
  description TEXT,
  pub_date TIMESTAMP,
  author VARCHAR(255),
  enclosure_url VARCHAR(255),
  enclosure_length BIGINT,
  enclosure_type VARCHAR(100),
  image_href VARCHAR(255),
  keywords TEXT[],
  chapters_url VARCHAR(255),
  chapters_type VARCHAR(100),
  podcast_id UUID REFERENCES podcasts(id) ON DELETE CASCADE
);

-- Create podcast_persons table with person_id as INT to reference persons(id)
CREATE TABLE podcast_persons (
  id SERIAL PRIMARY KEY,
  podcast_id UUID REFERENCES podcasts(id) ON DELETE CASCADE,
  person_id INT REFERENCES persons(id) ON DELETE CASCADE -- Changed to INT to match persons.id type
);

-- Create episode_persons table with person_id as INT to reference persons(id)
CREATE TABLE episode_persons (
  id SERIAL PRIMARY KEY,
  episode_id UUID REFERENCES episodes(id) ON DELETE CASCADE,
  person_id INT REFERENCES persons(id) ON DELETE CASCADE, -- Changed to INT to match persons.id type
  role VARCHAR(100)
);

-- Create episode_images table
CREATE TABLE episode_images (
  id SERIAL PRIMARY KEY,
  episode_id UUID REFERENCES episodes(id) ON DELETE CASCADE,
  image_url VARCHAR(255),
  image_description TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
