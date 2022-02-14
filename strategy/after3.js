const _validator = {
    strategy: null,
    validate: function (data) {
        return this.strategy.validate(data);
    },
    getMessage: function () {
        return this.strategy.instructions;
    }
}

const isNotEmptyStrategy = {
    validate(value) {
        return value !== "";
    },
    instructions: "this value is important!"
}

_validator.strategy = isNotEmptyStrategy;
if(_validator.validate("1")){
    console.log(_validator.getMessage())
}

const validator = {
    types: {}, // 검증 알고리즘 인터페이스 들
    messages: [], // 에러 메시지들
    config: {}, // 검사 설정
    setType(name, object) {
        this.types[name] = object;
    },
    validate: function (data) {
        let i, number = 0, msg, type, checker, result_ok;

        for (i in data) {
            if (data.hasOwnProperty(i)) {
                type = this.config[i];
                checker = this.types[type];

                if (!type) {
                    continue;
                }

                if (!checker) {
                    throw {
                        name: "ValidationError",
                        message: type + "value does not exist!"
                    }
                }

                result_ok = checker.validate(data[i]);

                if (!result_ok) {
                    msg = "value is not valid! " + checker.instructions;
                    this.messages[number] = msg;
                    number++;
                }
            }
        }
    },
    hasErrors: function () {
        return this.messages.length > 0;
    }
}

var data = {
    first_name: "",
    last_name: "Lee",
    age: "s",
    username: "test"
}

validator.config = {
    first_name: 'isNonEmpty',
    age: 'isNumber',
    username: 'isAlphaNum'
}

validator.setType('isNonEmpty', {
    validate(value) {
        return value !== "";
    },
    instructions: "this value is important!"
});

validator.setType('isNumber', {
    validate(value) {
        return !isNaN(Number(value));
    },
    instructions: "Number can only be used!"
});

validator.setType('isAlphaNum', {
    validate(value) {
        return !(/[^a-z0-9]/i.test(value));
    },
    instructions: "text except for special text and number can only be used!"
});

validator.validate(data);
if (validator.hasErrors()) {
    console.log(validator.messages.join("\n"));
}