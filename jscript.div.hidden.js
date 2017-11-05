function mainPage() {
	document.title = "Pharma Portal";
	document.getElementById("mainPage").hidden = false;
	document.getElementById("PatientScreening").hidden = true;
	document.getElementById("LatestCPDmodules").hidden = true;
	document.getElementById("InPharmacyMagazine").hidden = true;
	document.getElementById("LatestNews").hidden = true;
	document.getElementById("FAQandTutorials").hidden = true;
}

function PatientScreening() {
	document.title = "View or perform new screen";
	document.getElementById("PatientScreening").hidden = false;
	document.getElementById("mainPage").hidden = true;
	document.getElementById("LatestCPDmodules").hidden = true;
	document.getElementById("InPharmacyMagazine").hidden = true;
	document.getElementById("LatestNews").hidden = true;
	document.getElementById("FAQandTutorials").hidden = true;
}

function LatestCPDmodules() {
	document.title = "Appraisal and revalidation";
	document.getElementById("LatestCPDmodules").hidden = false;
	document.getElementById("PatientScreening").hidden = true;
	document.getElementById("mainPage").hidden = true;
	document.getElementById("InPharmacyMagazine").hidden = true;
	document.getElementById("LatestNews").hidden = true;
	document.getElementById("FAQandTutorials").hidden = true;
}

function InPharmacyMagazine() {
	document.title = "Analysis and in depth information";
	document.getElementById("InPharmacyMagazine").hidden = false;
	document.getElementById("PatientScreening").hidden = true;
	document.getElementById("LatestCPDmodules").hidden = true;
	document.getElementById("mainPage").hidden = true;
	document.getElementById("LatestNews").hidden = true;
	document.getElementById("FAQandTutorials").hidden = true;
}

function LatestNews() {
	document.title = "Latest news affecting community pharmacies";
	document.getElementById("LatestNews").hidden = false;
	document.getElementById("PatientScreening").hidden = true;
	document.getElementById("LatestCPDmodules").hidden = true;
	document.getElementById("InPharmacyMagazine").hidden = true;
	document.getElementById("mainPage").hidden = true;
	document.getElementById("FAQandTutorials").hidden = true;
}

function FAQandTutorials() {
	document.title = "Instructions and help";
	document.getElementById("FAQandTutorials").hidden = false;
	document.getElementById("PatientScreening").hidden = true;
	document.getElementById("LatestCPDmodules").hidden = true;
	document.getElementById("InPharmacyMagazine").hidden = true;
	document.getElementById("LatestNews").hidden = true;
	document.getElementById("mainPage").hidden = true;
}