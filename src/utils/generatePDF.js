// PDF Generation Utility - Automatically generates PDF from CV data
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export const generateCVPDF = async (cvData) => {
  try {
    // Create a temporary container for CV HTML
    const cvContainer = document.createElement('div');
    cvContainer.style.position = 'absolute';
    cvContainer.style.left = '-9999px';
    cvContainer.style.width = '210mm';
    cvContainer.style.height = '297mm';
    cvContainer.style.backgroundColor = 'white';
    cvContainer.style.padding = '10mm';
    cvContainer.style.fontFamily = 'Arial, sans-serif';
    cvContainer.style.fontSize = '11px';
    cvContainer.style.lineHeight = '1.4';
    cvContainer.style.color = '#333';

    // Build CV HTML
    cvContainer.innerHTML = `
      <div style="max-width: 100%; margin: 0 auto;">
        <!-- Header -->
        <div style="text-align: center; margin-bottom: 15px; border-bottom: 2px solid #6c63ff; padding-bottom: 10px;">
          <h1 style="margin: 0; font-size: 24px; color: #000;">${cvData.personal.name} ${cvData.personal.lastName}</h1>
          <p style="margin: 5px 0; font-size: 14px; color: #6c63ff; font-weight: bold;">${cvData.personal.title}</p>
          <p style="margin: 3px 0; font-size: 10px;">
            ${cvData.personal.address}, ${cvData.personal.country} | 
            ${cvData.personal.email} | 
            ${cvData.personal.phone}
          </p>
        </div>

        <!-- Summary -->
        <div style="margin-bottom: 12px;">
          <h2 style="font-size: 12px; font-weight: bold; color: #6c63ff; margin: 0 0 5px 0; border-bottom: 1px solid #ddd; padding-bottom: 3px;">SUMMARY</h2>
          <p style="margin: 0; font-size: 10px; text-align: justify; line-height: 1.5;">${cvData.summary}</p>
        </div>

        <!-- Experience -->
        <div style="margin-bottom: 12px;">
          <h2 style="font-size: 12px; font-weight: bold; color: #6c63ff; margin: 0 0 5px 0; border-bottom: 1px solid #ddd; padding-bottom: 3px;">EXPERIENCE</h2>
          ${cvData.experience.map(exp => `
            <div style="margin-bottom: 8px;">
              <div style="display: flex; justify-content: space-between; margin-bottom: 2px;">
                <strong style="font-size: 11px;">${exp.position} - ${exp.company}</strong>
                <span style="font-size: 10px; color: #666;">${exp.startDate} - ${exp.endDate}</span>
              </div>
              <p style="margin: 2px 0; font-size: 9px; color: #666;">${exp.location}</p>
              <ul style="margin: 3px 0; padding-left: 20px; font-size: 10px;">
                ${exp.responsibilities.slice(0, 4).map(resp => `<li style="margin: 2px 0;">${resp}</li>`).join('')}
              </ul>
            </div>
          `).join('')}
        </div>

        <!-- Education -->
        <div style="margin-bottom: 12px;">
          <h2 style="font-size: 12px; font-weight: bold; color: #6c63ff; margin: 0 0 5px 0; border-bottom: 1px solid #ddd; padding-bottom: 3px;">EDUCATION</h2>
          ${cvData.education.map(edu => `
            <div style="margin-bottom: 6px;">
              <strong style="font-size: 11px;">${edu.degree} - ${edu.specialization}</strong><br>
              <span style="font-size: 10px;">${edu.institution}</span><br>
              <span style="font-size: 9px; color: #666;">${edu.location} | ${edu.year}</span>
            </div>
          `).join('')}
        </div>

        <!-- Skills -->
        <div style="margin-bottom: 12px;">
          <h2 style="font-size: 12px; font-weight: bold; color: #6c63ff; margin: 0 0 5px 0; border-bottom: 1px solid #ddd; padding-bottom: 3px;">SKILLS</h2>
          <div style="font-size: 10px;">
            <p style="margin: 3px 0;"><strong>Web Development:</strong> ${cvData.skills.webDevelopment.join(', ')}</p>
            <p style="margin: 3px 0;"><strong>Zoho Ecosystem:</strong> ${cvData.skills.zohoEcosystem.join(', ')}</p>
            <p style="margin: 3px 0;"><strong>Data & Analytics:</strong> ${cvData.skills.dataAnalytics.join(', ')}</p>
            <p style="margin: 3px 0;"><strong>Programming:</strong> ${cvData.skills.programming.join(', ')}</p>
            <p style="margin: 3px 0;"><strong>Tools:</strong> ${cvData.skills.tools.join(', ')}</p>
          </div>
        </div>

        <!-- Certifications -->
        <div style="margin-bottom: 12px;">
          <h2 style="font-size: 12px; font-weight: bold; color: #6c63ff; margin: 0 0 5px 0; border-bottom: 1px solid #ddd; padding-bottom: 3px;">CERTIFICATIONS</h2>
          ${cvData.certifications.map(cert => `
            <p style="margin: 2px 0; font-size: 10px;"><strong>${cert.title}</strong> - ${cert.issuer} (${cert.year})</p>
          `).join('')}
        </div>

        <!-- Languages -->
        <div>
          <h2 style="font-size: 12px; font-weight: bold; color: #6c63ff; margin: 0 0 5px 0; border-bottom: 1px solid #ddd; padding-bottom: 3px;">LANGUAGES</h2>
          <p style="margin: 0; font-size: 10px;">${cvData.languages.join(' | ')}</p>
        </div>
      </div>
    `;

    document.body.appendChild(cvContainer);

    // Convert to canvas
    const canvas = await html2canvas(cvContainer, {
      scale: 2,
      useCORS: true,
      backgroundColor: '#ffffff',
    });

    // Create PDF - FIT ON 1 PAGE ONLY
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF('p', 'mm', 'a4');
    const imgWidth = 210;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;
    const pageHeight = 297;
    
    // If content is taller than 1 page, scale it down to fit
    let finalHeight = imgHeight;
    let finalWidth = imgWidth;
    
    if (imgHeight > pageHeight) {
      finalHeight = pageHeight;
      finalWidth = (finalHeight * canvas.width) / canvas.height;
    }
    
    // Add image to fit on 1 page only - NO BLANK PAGE
    pdf.addImage(imgData, 'PNG', (imgWidth - finalWidth) / 2, 0, finalWidth, finalHeight);

    // Download
    pdf.save('Anjan_Karan_CV.pdf');

    // Cleanup
    document.body.removeChild(cvContainer);
  } catch (error) {
    console.error('Error generating PDF:', error);
    alert('Error generating CV PDF. Please try again.');
  }
};
