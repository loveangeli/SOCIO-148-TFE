// JavaScript for dynamic content rendering
const banners = document.querySelectorAll('.banner');
const contentSection = document.getElementById('content');

banners.forEach(banner => {
  banner.addEventListener('click', () => {
    // Remove active state from all banners
    banners.forEach(b => b.classList.remove('active'));
    // Add active state to clicked banner
    banner.classList.add('active');

    const content = banner.dataset.content;
    let contentHtml = '';
    
    switch (content) {
      case 'intro':
        contentHtml = `
          <h2>Introduction: The Evolution of Psychiatric Issues</h2>
	<h3><u>Brief Overview</u></h3>
          <p>Psychiatric medicalization represents a complex process of understanding mental health through a medical lens,  redefining human experiences or societal phenomena as experienced by an individual, in medical terms and addressing them through clinical frameworks.</p>
<br></br>
	<h3><i>Historical Scope and Overreach of Psychiatry</i></h3>
	<p> Freud’s theoretical expansions, which extended beyond clinical practice into sociocultural domains, set a precedent for psychiatry’s influence. In extreme cases, psychiatric diagnoses have been co-opted for oppressive purposes, such as the Soviet use of "sluggish schizophrenia" to suppress political dissent, exemplifying the deliberate misuse of psychiatric tools (The Lancet Psychiatry, 2016). This illustrates abuse as a subset of this phenomenon which occurs when psychiatry is deliberately misused to serve purposes other than the patient’s well-being (Chodoff, 2009).</p>
<br></br>
	<h3><i>Early Psychological Theories that perpetuated Racial Discrimination</i></h3>
	<p><b>• Eugenics and Early Intelligence Testing</b> - aimed to improve humanity through selective breeding, proposing that only “gifted” individuals should reproduce (Augoustinos, 2013).</p>
	<p><b>• Social Darwinism and Race Psychology</b> - a distortion of Darwin’s theory of evolution—argued for the survival of the fittest in societal contexts. This ideology justified domination by “strong” races over “weaker” ones and reinforced racial inequalities (Augoustinos, 2013).</p>
	<p><b>• Intelligence Testing and Oppressive Policies</b> - shaped discriminatory educational, vocational, and social practices, further marginalizing Indigenous communities.</p>
	<p><b>• Freudian and Personality Theories
</b> - psychodynamic theories framed prejudice as rooted in unconscious psychological conflicts. </p>
	<p><b>• Race and IQ Debate</b> - The publication of The Bell Curve (Herrnstein & Murray, 1994) revived biological determinist views, asserting a genetic basis for intelligence differences between racial groups. This debate significantly contributed to the perception of psychology as a discipline complicit in legitimizing racism (Augoustinos, 2013).</p>
        `;
        break;
      case 'history':
        contentHtml = `
          <h2>Historical and Global Context of Psychiatric Medicalization</h2>
          <p>The global landscape of psychiatric medicalization reveals a history of psychiatric issues being used to justify racial domination, as described by Cuncic (2024).</p>
<br></br>
	<h3><i>Racial and Cultural Discrimination in Psychiatry</i></h3>
	<p>Medicalized psychiatric theories contributes to the reinforcement of racism, with specific examples such as black immigrants being misdiagnosed or ignored in various countries. However, the focus of psychiatry towards the cultural ‘other’ has now shifted into knowing the individual within their cultural context, rather than from an anglocentric perspective.</p>
<br></br>
	<h3><i>Global Case Studies</i></h3>
	<p>• Migrant populations remain heavily disadvantaged regarding multiple evaluations of psychological and psychiatric health (Honkaniemi, 2022).</p>
	<p>• There also exists correlative data as how migrants have greater risk of a common mental disorder or psychotic disorder diagnosis vs natives. </p>
	<p>• Less help-seeking behaviors, especially in non-Western migrants but still get compulsory inpatient confinement more than natives. </p>
	<p>• In Sweden, similar patterns regarding migrant mental health emerged, including generally poorer mental well-being, exacerbated by prevalent inequalities favoring native-born people. </p>
<br></br>
	<h3><i>Philippine Context</i></h3>
	<p>Prevalent barriers in Filipino mental help-seeking behavior are still traced culturally even within other countries like the US (Martinez et al., 2020). Social and self-stigma, which is driven by shame <i>(hiya)</i> and/or upholding dignity <i>(karangalan)</i>. </p>
        `;
        break;
        case 'solutions':
        contentHtml = `
          <h2>Moving Forward: Solutions to Cultural and Racial Discrimination</h2>
          <h3><u>Strategies for Improving Cultural Sensitivity in Psychiatry</u></h3>
<p><b>• Culturally Competent Professionals:</b> Cultural competence in mental health involves understanding and respecting the cultural differences between providers and patients. This ensures patients feel understood and valued, reducing misdiagnoses and encouraging treatment continuation. Training programs can emphasize cultural awareness during clinical placements and internships, focusing on the societal impact of behavior and cultural nuances.
</p>
<p><b>• Enhanced Psychiatric Training:</b> Incorporating cultural sensitivity into psychiatric curricula can help professionals understand diverse cultural norms and stigmas surrounding mental health. For instance, addressing internalized racism and how it influences mental health outcomes can help providers better support marginalized communities.
</p>
<p><b>• Inclusive Mental Health Systems:</b> Mental health systems should be more inclusive by creating spaces that reflect and respect diverse cultural and racial identities. This includes recruiting diverse mental health professionals and ensuring treatment approaches consider cultural values and traditions.
</p>
<p><b>• Reducing Language Barriers:</b> Language barriers are a major challenge in mental health care. Offering services in multiple languages, employing bilingual professionals, and providing translated materials can improve accessibility and patient satisfaction.
</p>
<br></br>
	<h3><i>Philippine Context</i></h3>
	<p> Improving the mental health system in the Philippines means increasing funding for mental health services, incorporating cultural competency into training, and creating inclusive policies that ensure mental health services are accessible to all.</p>
<p><b>• Increased Funding:</b> Allocate more resources to mental health services, ensuring facilities are adequately staffed and equipped.
</p>
<p><b>• Cultural Competency in Training:</b> Embed cultural competence in local psychiatric education. Filipino cultural traits, values, and challenges should be central to training. They should be specifically trained according to the values and cultural traits of the community the medical professional is assigned to. </p>
<p><b>• Inclusive Policies:</b> Create policies that mandate accessibility for all, such as offering free or subsidized mental health services for marginalized groups.
</p>
<p><b>• Decentralized Services:</b> Expand mental health services to rural areas, integrating cultural sensitivity in outreach efforts.</p>
<p><b>• Public Education Campaigns:</b> Reduce stigma around mental health in the Philippines by promoting culturally relevant awareness campaigns through media.
</p>

        `;
        break;
      default:
        contentHtml = `
          <h2>Welcome to the Content Area</h2>
          <p>Click a banner to explore detailed insights into psychiatric medicalization.</p>
        `;
    }
    
    contentSection.innerHTML = contentHtml;
  });
});
