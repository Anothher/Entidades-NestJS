import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1699048188706 implements MigrationInterface {
    name = 'Migration1699048188706'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`tbl_photo\` (\`codPhoto\` int NOT NULL AUTO_INCREMENT, \`lowQuality\` varbinary(500) NOT NULL, \`mediumQuality\` varbinary(500) NOT NULL, \`largeQuality\` varbinary(500) NOT NULL, PRIMARY KEY (\`codPhoto\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`tbl_category\` (\`codCategory\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(30) NOT NULL, \`descripcion\` varchar(200) NOT NULL, \`codPhoto\` int NULL, UNIQUE INDEX \`REL_410ae948f2e23dee8f59d35101\` (\`codPhoto\`), PRIMARY KEY (\`codCategory\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`tbl_filmServer\` (\`codFilmServer\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(30) NOT NULL, \`quality\` varchar(10) NOT NULL, \`audio\` varchar(10) NOT NULL, \`filmIdFilm\` int NULL, PRIMARY KEY (\`codFilmServer\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`tbl_film\` (\`codfilm\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(60) NOT NULL, \`year\` int NOT NULL, \`description\` varchar(200) NOT NULL, \`codCategory\` int NULL, UNIQUE INDEX \`REL_bf0748e89adfbc34d8907ee14b\` (\`codCategory\`), PRIMARY KEY (\`codfilm\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`tbl_CategoryFilm\` (\`codCategoryFilm\` int NOT NULL AUTO_INCREMENT, \`codCategory\` int NULL, \`codfilm\` int NULL, UNIQUE INDEX \`REL_407c4a2fcdc946590fc7eed836\` (\`codCategory\`), UNIQUE INDEX \`REL_491ad10038c3cd46e58f42e76e\` (\`codfilm\`), PRIMARY KEY (\`codCategoryFilm\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`tbl_profile\` (\`codProfile\` int NOT NULL, \`name\` varchar(50) NOT NULL, \`lastname\` varchar(50) NOT NULL, \`email\` varchar(60) NOT NULL, \`gender\` varchar(11) NOT NULL, \`birthdate\` date NOT NULL, PRIMARY KEY (\`codProfile\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`tbl_user\` (\`codUser\` int NOT NULL, \`userName\` varchar(50) NOT NULL, \`password\` varchar(40) NOT NULL, \`state\` tinyint NOT NULL, \`codProfile\` int NULL, UNIQUE INDEX \`REL_fa58f22c0289b9ea989348a1a2\` (\`codProfile\`), PRIMARY KEY (\`codUser\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`tbl_rol\` (\`codRol\` int NOT NULL AUTO_INCREMENT, \`descripcion\` varchar(200) NOT NULL, \`userEntityIdUser\` int NULL, PRIMARY KEY (\`codRol\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`tbl_category\` ADD CONSTRAINT \`FK_410ae948f2e23dee8f59d351010\` FOREIGN KEY (\`codPhoto\`) REFERENCES \`tbl_photo\`(\`codPhoto\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`tbl_filmServer\` ADD CONSTRAINT \`FK_eca523f9c413e121cf520676be9\` FOREIGN KEY (\`filmIdFilm\`) REFERENCES \`tbl_film\`(\`codfilm\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`tbl_film\` ADD CONSTRAINT \`FK_bf0748e89adfbc34d8907ee14b1\` FOREIGN KEY (\`codCategory\`) REFERENCES \`tbl_category\`(\`codCategory\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`tbl_CategoryFilm\` ADD CONSTRAINT \`FK_407c4a2fcdc946590fc7eed8360\` FOREIGN KEY (\`codCategory\`) REFERENCES \`tbl_category\`(\`codCategory\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`tbl_CategoryFilm\` ADD CONSTRAINT \`FK_491ad10038c3cd46e58f42e76e1\` FOREIGN KEY (\`codfilm\`) REFERENCES \`tbl_film\`(\`codfilm\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`tbl_user\` ADD CONSTRAINT \`FK_fa58f22c0289b9ea989348a1a29\` FOREIGN KEY (\`codProfile\`) REFERENCES \`tbl_profile\`(\`codProfile\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`tbl_rol\` ADD CONSTRAINT \`FK_3de60e9acf497d8393e9fdc19a7\` FOREIGN KEY (\`userEntityIdUser\`) REFERENCES \`tbl_user\`(\`codUser\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`tbl_rol\` DROP FOREIGN KEY \`FK_3de60e9acf497d8393e9fdc19a7\``);
        await queryRunner.query(`ALTER TABLE \`tbl_user\` DROP FOREIGN KEY \`FK_fa58f22c0289b9ea989348a1a29\``);
        await queryRunner.query(`ALTER TABLE \`tbl_CategoryFilm\` DROP FOREIGN KEY \`FK_491ad10038c3cd46e58f42e76e1\``);
        await queryRunner.query(`ALTER TABLE \`tbl_CategoryFilm\` DROP FOREIGN KEY \`FK_407c4a2fcdc946590fc7eed8360\``);
        await queryRunner.query(`ALTER TABLE \`tbl_film\` DROP FOREIGN KEY \`FK_bf0748e89adfbc34d8907ee14b1\``);
        await queryRunner.query(`ALTER TABLE \`tbl_filmServer\` DROP FOREIGN KEY \`FK_eca523f9c413e121cf520676be9\``);
        await queryRunner.query(`ALTER TABLE \`tbl_category\` DROP FOREIGN KEY \`FK_410ae948f2e23dee8f59d351010\``);
        await queryRunner.query(`DROP TABLE \`tbl_rol\``);
        await queryRunner.query(`DROP INDEX \`REL_fa58f22c0289b9ea989348a1a2\` ON \`tbl_user\``);
        await queryRunner.query(`DROP TABLE \`tbl_user\``);
        await queryRunner.query(`DROP TABLE \`tbl_profile\``);
        await queryRunner.query(`DROP INDEX \`REL_491ad10038c3cd46e58f42e76e\` ON \`tbl_CategoryFilm\``);
        await queryRunner.query(`DROP INDEX \`REL_407c4a2fcdc946590fc7eed836\` ON \`tbl_CategoryFilm\``);
        await queryRunner.query(`DROP TABLE \`tbl_CategoryFilm\``);
        await queryRunner.query(`DROP INDEX \`REL_bf0748e89adfbc34d8907ee14b\` ON \`tbl_film\``);
        await queryRunner.query(`DROP TABLE \`tbl_film\``);
        await queryRunner.query(`DROP TABLE \`tbl_filmServer\``);
        await queryRunner.query(`DROP INDEX \`REL_410ae948f2e23dee8f59d35101\` ON \`tbl_category\``);
        await queryRunner.query(`DROP TABLE \`tbl_category\``);
        await queryRunner.query(`DROP TABLE \`tbl_photo\``);
    }

}
