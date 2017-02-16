declare var SimplePDF;
import * as fs from 'file-system';

export class TNSPDF {

  public static createPDF() {
    let A4paperSize = new CGSize({ width: 595, height: 842 });
    let pdf = new SimplePDF({ pageSize: A4paperSize, pageMargin: 20.0 });
    pdf.addText('NativeScript for Angular on Egghead.io');
    
    let pdfData = pdf.generatePDFdata();

    let documents = fs.knownFolders.documents();
    let path = fs.path.join(documents.path, 'test.pdf');

    // write to file
    try {
      pdfData.writeToFileAtomically(path, true);
      console.log('wrote pdf to:', path);
    } catch (err) {
      console.log(err);
    }
  }
}