import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";
import { ensureAdmin } from "../../middlewares/ensureAdmin";

export class AlterUserAddPassword1639556920283 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn(
            "users", 
            new TableColumn({
                name: "password",
                type: "varchar",
                isNullable: true
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn("users", "password");

    }

}
