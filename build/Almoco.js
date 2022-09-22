"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Almoco = void 0;
var Almoco = /** @class */ (function () {
    function Almoco(proteina, carboidrato) {
        this.proteina = proteina;
        this.carboidrato = carboidrato;
    }
    Object.defineProperty(Almoco.prototype, "refeicao", {
        get: function () {
            return "".concat(this.proteina, " com ").concat(this.carboidrato, " ");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Almoco.prototype, "carne", {
        set: function (proteina) {
            if (proteina != '') {
                this.proteina = proteina;
            }
        },
        enumerable: false,
        configurable: true
    });
    return Almoco;
}());
exports.Almoco = Almoco;
