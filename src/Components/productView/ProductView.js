import img from './assets/Backgroundnew.jpg';
import img2 from './assets/Lifesome1.PNG';
import img3 from './assets/Lifesome2.PNG';

import img4 from './assets/Capa 2 1.png';
import img5 from './assets/Capa 2 2.png';

function Product() {
    return (
      <section className='contProductFondo'>
            <img alt='fondo' className='imgFondo' src={img} />
            <h2>Preventive drug therapies improve the chances of positive health outcomes.</h2>
            <p className="pProduct">In cancer therapy, prevention of metastasis progression would improve the chances of survival outcome for 90% of cancer patients.</p>
            <div className='contProd'>
                <h3>After a decade of studies we present LIFESOME the new active carrier that combines anti-metastatic and anti-tumoral activity.</h3> 
                <p className='pProd2'>Lifesome has the unique capacity to prevent metastasis dissemination and cancer development. Opening the possibility to any anti-cancer drug combination Lifesome is dedicated for personalised treatment.</p>
                <div className='fondoLinear'>
                    <h3 className='h3img'>Lifesome organization, with only 1 component and following a traditional vesicles formation for</h3>
                    <div className='imagenes'>
                        <img alt='fondo' className='imgFondo2' src={img2} />
                        <img alt='fondo' className='imgFondo3' src={img3} />
                    </div>
                </div>
                <div className='NanoParts'>
                    <div className='InVitro'>
                        <img alt='InVitro' className='imgInVitro' src={img4} />
                        <div className='contInVitro'>
                            <h4 className='h4InVitro'>InVitro</h4>
                            <p>Modulates calcium entry and reduces cancer cell migration and metastasis ocurrences by blocking the oncoprotein association in several cancer types. LINK to 12-11-10-6</p>
                            <p>Improves: the antibodies (anti-EGFR) action in colorectal cancer, the cancers treatments driven by BRAF mutations in melanoma and the hormonotherapy for neuroendocrine prostate cancers LINK to 9 and 0</p>
                            <p>Modifies the activity of plasma membrane proteins involved in cancer progression. LINK to 5-2-7</p>
                            <p>Inhibits Zeb1 upregulation, an Ephitelial to mesenchimal transition transcription factor implicated in celullar migration and cancer aggressiveness. LINK to 3</p>
                            <p>Reduces Taxane-induced peripheral neuropathy, a commun side effect in taxanes cancer treatment. LINK to 4</p>
                        </div>
                    </div>
                    <div className='InVivo'>
                            <img alt='InVivo' className='imgInVivo' src={img5} />
                            <div className='ContInVivo' >
                                <h4 className='h4InVivo'>InVivo</h4>
                                <p>Enables to encapsulate any hydrophilic or hydrophobic material.</p>
                                <p>Has the unique property to combine anti-metastatic and anti-tumoral activity.</p>
                                <p>Decreases the toxicity and side effects of the anti-tumoral encapsulated drug.
                                </p>
                                <p>Exposes hydrophilic residues that  avoid large corona formation and specific recognition by the immune system.</p>
                                <p>Increases therapeutics index of the antitumoral encapsulated drugs. </p>
                                <p>Increases drug release in situ through localized hypertermia between 40 and 45°C .</p>
                                <p>Targets specifically tumor environment, via EPR effect and also via the glycan head groups that bind lectin receptors around tumors.</p>
                            </div>
                        </div>
                </div>
            </div>
      </section>
      
    );
  }
  
  export default Product;