"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilmEntity = void 0;
const typeorm_1 = require("typeorm");
let FilmEntity = class FilmEntity {
};
exports.FilmEntity = FilmEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({
        name: 'codfilm',
        type: 'int'
    }),
    __metadata("design:type", String)
], FilmEntity.prototype, "id_film", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'name',
        type: 'varchar',
        nullable: false,
        length: 60
    }),
    __metadata("design:type", String)
], FilmEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'year',
        type: 'int',
        nullable: false
    }),
    __metadata("design:type", Date)
], FilmEntity.prototype, "year", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'description',
        type: 'varchar',
        nullable: false,
        length: 200
    }),
    __metadata("design:type", String)
], FilmEntity.prototype, "description", void 0);
exports.FilmEntity = FilmEntity = __decorate([
    (0, typeorm_1.Entity)('tbl_film')
], FilmEntity);
//# sourceMappingURL=film.entity.js.map