import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: "newLineToBr",
})
export default class NewLineToBrPipe implements PipeTransform {
    public transform(text: string): string {
        return text.replace(/\n/g, "<br/>");
    }
}
