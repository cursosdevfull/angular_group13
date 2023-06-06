import * as fs from 'fs';
import * as path from 'path';

export class Utils {
  static getDirectory(directory: string): string {
    //return directory.replace(/\\/g, "/");
    return path.join(process.cwd(), '../', directory);
  }

  static readRecursiveDirectory(directory: string, cb: (path: string) => void) {
    fs.readdirSync(directory).forEach((file) => {
      const filePath = path.join(directory, file);
      const stat = fs.statSync(filePath);
      if (stat.isDirectory()) {
        Utils.readRecursiveDirectory(filePath, cb);
      } else {
        cb(filePath);
      }
    });
  }
}
