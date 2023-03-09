// config je objekat u kom smo upisali neke atribute...NJih moramo definisati u Validatoru
let config = {
  ime_prezime: {
    required: true, //obavezan unos teksta
    minlength: 3, //min tri slova
    maxlength: 50, // max pedeset
  },

  korisnicko_ime: {
    required: true,
    minlength: 5,
    maxlength: 50,
  },

  email: {
    required: true,
    email: true,
    minlength: 5,
    maxlength: 50,
  },

  broj_telefona: {
    minlength: 9,
    maxlength: 13,
  },

  lozinka: {
    required: true,
    minlength: 7,
    maxlength: 25,
    matching: "ponovi_lozinku",
  },

  ponovi_lozinku: {
    required: true,
    minlength: 7,
    maxlength: 25,
    matching: "lozinka",
  },
};

//saljemo validatoru config
let validator = new Validator(config);
