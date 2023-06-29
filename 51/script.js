window.jsPDF = window.jspdf.jsPDF;



const btn = document.getElementById('btn');

// btn.addEventListener('click', () => {

//     const list = document.querySelectorAll('.pay');
//     const doc = new jsPDF();
//     let i = 80;
//     let j = 80;
//     const img = document.getElementById('logo');
    

//     list.forEach(item => {
//         const name = item.id.substring(4);
//         const pay = item.value;

        
        
//         doc.addImage(img, 'jpeg', 160, 250, 50, 50);
//         doc.setFontSize(10);
//         doc.text(`${name}'s Payslip`, i, j);
//         doc.setFontSize(30);
//         doc.text(`Net Pay: £${pay}`, i, j+10);

//         doc.addPage('a4', 'portrait')
        

//     })

//     const pages = list.length;
//     doc.deletePage(pages+1)
    


   
   
//    doc.output('dataurlnewwindow');
// })


const invoiceSender = document.getElementById('invoice_sender');
const invoiceReceiver = document.getElementById('invoice_receiver');
const invoiceNo = document.getElementById('invoice_no'); 
const invoiceDate = document.getElementById('invoice_date');
const invoiceDescription = document.getElementById('invoice_description');
const invoiceQuantity = document.getElementById('invoice_quantity');
const invoiceRate = document.getElementById('invoice_rate');
const invoiceTotal = document.getElementById('invoice_total');
const invoiceBtn = document.getElementById('invoice_btn');

const invoiceTitleDescription = document.getElementById('invoice_value_title_description');
const invoiceTitleQuantity = document.getElementById('invoice_value_title_quantity');
const invoiceTitleRate = document.getElementById('invoice_value_title_rate');

invoiceQuantity.addEventListener('input', function(){
    const totalValue = (invoiceRate.value * invoiceQuantity.value).toFixed(2);
    invoiceTotal.innerText = `£${totalValue}`
})

invoiceRate.addEventListener('input', function(){
    const totalValue = (invoiceRate.value * invoiceQuantity.value).toFixed(2);
    invoiceTotal.value = `£${totalValue}`
})

invoiceBtn.addEventListener('click', function(){
    const sender = invoiceSender.value;
    const receiver = invoiceReceiver.value;
    const no = invoiceNo.value;
    const date = new Date(invoiceDate.value).toLocaleDateString('en-gb', { year: 'numeric', month: 'short', day: 'numeric' });
    const description = invoiceDescription.value;
    const quantity = invoiceQuantity.value.toString();
    const rate = invoiceRate.value.toString();
    const total = (quantity * rate).toFixed(2).toString();

    const titleDescription = invoiceTitleDescription.value;
    const titleQuantity = invoiceTitleQuantity.value;
    const titleRate = invoiceTitleRate.value;

    const doc = new jsPDF();

    doc.setFontSize(25);
    doc.text(sender, 15, 15);
    doc.setFontSize(40);
    doc.text('INVOICE', 130, 15);
    
    doc.setFontSize(10);
    doc.setTextColor('#646464');
    doc.text('Bill to:', 15, 45);

    doc.setFontSize(15);
    doc.setTextColor('#000000');
    doc.text(receiver, 15, 50);

    doc.text(`Invoice No: #${no}`, 150, 30);
    doc.text(`Date: ${date}`, 150, 40);
    doc.rect(5, 55, 200, 6, 'F');
    doc.setTextColor('#FFFFFF');
    doc.text(titleDescription, 10, 60);
    doc.text(titleQuantity, 100, 60);
    doc.text(titleRate, 135, 60);
    doc.text('Total', 170, 60);

    doc.setTextColor('#000000');
    doc.text(description, 10, 70, {maxWidth: 85});
    doc.text(quantity, 105, 70);
    doc.text(`£${rate}`, 135, 70);
    doc.text(`£${total}`, 170, 70);
    // doc.line(10, 61, 185, 61);

    

    doc.addPage('a4', 'portrait');3
    doc.deletePage(2)
    doc.output('dataurlnewwindow');
})

