export class Person {

    constructor(
        public firstName: string,
        public lastName: string,
        public email: string,
        public degree: string,
        public occupation: string,
        public workingDomain?: string,
        public progLang?: string,
        public photoPath?: string
    ) { }

}
