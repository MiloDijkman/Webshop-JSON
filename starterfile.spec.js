describe('Snoep Testen', function() {

    it('Prijs', function () {
        let snoep = new Snoep();
        expect(snoep.getPrijs()).toBe(1.45);
    });


    it('Naam', function () {
        let snoep = new Snoep();
        expect(snoep.getNaam()).toBe('Haribo');
    });


    it('Kleur', function () {
        let snoep = new Snoep();
        expect(snoep.getKleur()).toBe('Blauw');
    });

    it('Inhoud', function () {
        let snoep = new Snoep();
        expect(snoep.getInhoud()).toBe('Groot');
    });


    it('Soort', function () {
        let snoep = new Snoep();
        expect(snoep.getSoort()).toEqual(['Drop', 'Gummy', 'Ronde Drop', 'Zoute Drop']);
    });

    describe('Andere Snoep', function() {
        it('Drop ', function () {
                let snoep = new Snoep();
                expect(snoep.getSoort()).toContain(
                    'Drop'
                    );
            });


        it('Gummy', function () {
             let snoep = new Snoep();
             expect(snoep.getSoort()).toContain(
                 'Gummy'
                 );
            });
    });


    describe('Drop', function() {
        it('Ronde Drop', function () {
            let snoep = new Snoep();
            expect(snoep.getSoort()).toContain(
                'Ronde Drop'
                );
        });


        it('Zoute Drop', function () {
            let snoep = new Snoep();
            expect(snoep.getSoort()).toContain(
                'Zoute Drop'
                );
        });
    });

});


describe('Koek Testen', function() {

    it('Prijs', function () {
        let koek = new Koek();
        expect(koek.getPrijs()).toBe(1.50);
    });


    it('Naam', function () {
        let koek = new Koek();
        expect(koek.getNaam()).toBe('Liga');
    });




    it('Inhoud', function () {
        let koek = new Koek();
        expect(koek.getInhoud()).toEqual(['Klein', 'Medium', 'Groot']);
    });


    it('Soort', function () {
        let koek = new Koek();
        expect(koek.getSoort()).toEqual(['Melk', 'Chocola', 'Aardbei & Chocola']);
    });

    describe('Koek', function() {
        it('Melk ', function () {
            let koek = new Koek();
            expect(koek.getSoort()).toContain(
                'Melk'
                );
        });
        it('Chocola ', function () {
            let koek = new Koek();
            expect(koek.getSoort()).toContain(
                'Chocola'
                );
        });
        it('Aardbei & Chocola ', function () {
            let koek = new Koek();
            expect(koek.getSoort()).toContain(
                'Aardbei & Chocola'
                );
        });
    });


    describe('Groottes', function() {
        it('Klein ', function () {
            let koek = new Koek();
            expect(koek.getInhoud()).toContain(
                'Klein'
                );
        });
        it('Medium ', function () {
            let koek = new Koek();
            expect(koek.getInhoud()).toContain(
                'Medium'
                );
        });
        it('Groot ', function () {
            let koek = new Koek();
            expect(koek.getInhoud()).toContain(
                'Groot'
                );
        });
    });

});


describe('Chocola Test', function() {

    it('Prijs', function () {
        let chocola = new Chocola();
        expect(chocola.getPrijs()).toBe(2);
    });


    it('Naam', function () {
        let chocola = new Chocola();
        expect(chocola.getNaam()).toBe('Milka');
    });

    it('Inhoud', function () {
        let chocola = new Chocola();
        expect(chocola.getInhoud()).toEqual(['Klein', 'Medium', 'Groot']);
    });

    it('Soort', function () {
        let chocola = new Chocola();
        expect(chocola.getSoort()).toEqual(['Wit', 'Puur', 'Melk']);
    });

    describe('Chocola', function() {
        it('Wit ', function () {
            let chocola = new Chocola();
            expect(chocola.getSoort()).toContain(
                'Wit'
                );
        });
        it('Puur ', function () {
            let chocola = new Chocola();
            expect(chocola.getSoort()).toContain(
                'Puur'
                );
        });
        it('Melk ', function () {
            let chocola = new Chocola();
            expect(chocola.getSoort()).toContain(
                'Melk'
                );
        });
    });


    describe('Groottes', function() {
        it('Klein ', function () {
            let chocola = new Chocola();
            expect(chocola.getInhoud()).toContain(
                'Klein'
                );
        });
        it('Medium ', function () {
            let chocola = new Chocola();
            expect(chocola.getInhoud()).toContain(
                'Medium'
                );
        });
        it('Groot ', function () {
            let chocola = new Chocola();
            expect(chocola.getInhoud()).toContain(
                'Groot'
                );
        });
    });

});


describe('Winkelmand testen', function() {
    it('Totaalbedrag', function() {
        let winkelmand = new Winkelmand();
        expect(winkelmand.getTotaalBedrag()).toBe(0);
    })
})


function Snoep(aantal) {
    let prijs = 1.45;
    const naam = 'Haribo';
    const kleur = 'Blauw';
    const inhoud = 'Groot';
    const soort = ['Drop', 'Gummy', 'Ronde Drop', 'Zoute Drop'];


    this.getSoort = function () {
        return soort;
    }

    this.getPrijs = function () {
        return prijs;
    }


    this.getNaam = function () {
        return naam;
    }


    this.getKleur = function () {
        return kleur;
    }


    this.getInhoud = function () {
        return inhoud;
    }
}


function Koek(aantal) {
    let prijs = 1.50;
    const naam = 'Liga';
    const soort = ['Melk', 'Chocola', 'Aardbei & Chocola'];
    const inhoud = ['Klein', 'Medium', 'Groot'];

    this.getPrijs = function () {
        return prijs;
    }


    this.getNaam = function () {
        return naam;
    }


    this.getSoort = function () {
        return soort;
    }


    this.getInhoud = function () {
        return inhoud;
    }
}


function Chocola(aantal) {
    let prijs = 2;
    const naam = 'Milka';
    const soort = ['Wit', 'Puur', 'Melk'];
    const inhoud = ['Klein', 'Medium', 'Groot'];

    this.getPrijs = function () {
        return prijs;
    }

    this.getNaam = function () {
        return naam;
    }

    this.getSoort = function () {
        return soort;
    }

    this.getInhoud = function () {
        return inhoud;
    }
}


function Winkelmand() {
    let totaalBedrag = 0;

    this.getTotaalBedrag = function () {
        return totaalBedrag;
    }

    this.vulWinkelmand = function (aantalSnoep, aantalChocola, aantalKoek) {
        let snoep = new Snoep(aantalSnoep);
        let chocola = new Chocola(aantalChocola);
        let koek = new Koek(aantalKoek);
    }
}
