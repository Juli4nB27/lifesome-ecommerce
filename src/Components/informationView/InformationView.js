import img from './assets/Capa 2.png';

function Information() {
    return (
      <div className='contenedor'>
        <div class="primerProducto">
                <table>
                    <tr>
                        <th class="col_1" >Product</th>
                        <th class="col_2" >Indication</th>
                        <th>Early Discovery</th>
                        <th>Late Discovery</th>
                        <th>Preclinical</th>
                        <th>Phase 1</th>
                        <th>Phase 2</th>
                        <th>Phase 3</th>
                        <th>Product Approval</th>
                        <th>Commercial</th>
                    </tr>
                    <tr>
                        <td>LIF-MB100</td>
                        <td>Clinical Oncology</td>
                        <td class="barProgress" colspan="8">
                            <div class="prgress">
                                <div class="progress-bar1"></div>
                            </div>
                        </td>
                    </tr>
                </table>
            </div>

            <div>
                <p class="pPrimerProducto">
                    Our peptide-shuttle carries the effective therapeutic drug to the brain to fight this devastating condition. Our approach combines oncology, rare disease and pediatrics.
                </p>
            </div>
            <div class="segundoProducto">
                <table>
                    <tr>
                        <th class="col_1" >Product</th>
                        <th class="col_2" >Indication</th>
                        <th>Early Discovery</th>
                        <th>Late Discovery</th>
                        <th>Preclinical</th>
                        <th>Phase 1</th>
                        <th>Phase 2</th>
                        <th>Phase 3</th>
                        <th>Product Approval</th>
                        <th>Commercial</th>
                    </tr>
                    <tr>
                        <td>LIF-MB101</td>
                        <td>Clinical Oncology</td>
                        <td class="barProgress" colspan="8">
                            <div class="prgress">
                                <div class="progress-bar2"></div>
                            </div>
                        </td>
                    </tr>
                </table>
            </div>
            <div>
                <p class="pSegundoProducto">
                    Protease resistance. Our proprietary peptides bear chemical modifications that increase their half-life up to days, maximizing the area-under-the-curve of therapeutic-peptide shuttle conjugates at their biological targets.
                </p>
            </div>
      </div>
    );
  }
  
  export default Information;