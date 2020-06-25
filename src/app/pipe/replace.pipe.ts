import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ // Sets a pipe decorator to the class
    name: 'replace' // Names the pipe
})
export class ReplacePipe implements PipeTransform { //creates a hook method to allow transformation

    transform(value: string, char: string, valueToReplace: string) {
        return value.replace(char, valueToReplace);
    }

}