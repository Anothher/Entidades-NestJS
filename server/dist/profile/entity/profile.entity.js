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
exports.ProfileEntity = void 0;
const typeorm_1 = require("typeorm");
let ProfileEntity = class ProfileEntity {
};
exports.ProfileEntity = ProfileEntity;
__decorate([
    (0, typeorm_1.PrimaryColumn)({
        name: 'codProfile',
        type: 'int',
        nullable: false,
    }),
    __metadata("design:type", Number)
], ProfileEntity.prototype, "id_profile", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'name',
        type: 'varchar',
        nullable: false,
        length: 50
    }),
    __metadata("design:type", String)
], ProfileEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'lastname',
        type: 'varchar',
        nullable: false,
        length: 50
    }),
    __metadata("design:type", String)
], ProfileEntity.prototype, "las_name", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'email',
        type: 'varchar',
        nullable: false,
        length: 60
    }),
    __metadata("design:type", String)
], ProfileEntity.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'gender',
        type: 'varchar',
        nullable: false,
        length: 11
    }),
    __metadata("design:type", String)
], ProfileEntity.prototype, "genero", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'birthdate',
        type: 'date',
        nullable: false,
    }),
    __metadata("design:type", Date)
], ProfileEntity.prototype, "birthdate", void 0);
exports.ProfileEntity = ProfileEntity = __decorate([
    (0, typeorm_1.Entity)('tbl_profile')
], ProfileEntity);
//# sourceMappingURL=profile.entity.js.map