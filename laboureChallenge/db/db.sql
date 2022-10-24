DROP DATABASE if EXISTS challengeHonoraire;
CREATE TABLE if NOT EXISTS challengeHonoraire;
CREATE Table ChargeClient(
    id INT PRIMARY KEY AUTO_INCREMENT,
    nom VARCHAR(255) NOT NULL,
    prenom VARCHAR(255) NOT NULL,
    idAnnualHonoraire INT NOT NULL
)ENGINE = INNODB;

CREATE TABLE users (
  id INT PRIMARY KEY AUTO_INCREMENT,
  login VARCHAR(255) NOT NULL,
  role VARCHAR(255)NOT NULL,
  pass VARCHAR(255) NOT NULL
) ENGINE = INNODB;
CREATE TABLE honoraireAnnual(
    idAnnualHonoraire INT NOT NULL,
    annual INT NOT NULL
)ENGINE = INNODB;

ALTER Table ChargeClient ADD constraint FOREIGN KEY  (idAnnualHonoraire) REFERENCES honoraireAnnual (idAnnualHonoraire);
