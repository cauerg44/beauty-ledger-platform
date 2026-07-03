import { Link, Outlet } from 'react-router-dom';
import './styles.css';
import ReturnGeneralPageButton from '../../../components/ReturnGeneralPageButtun';
import type { ProfessionalLoggedDTO } from '../../../models/professional-logged';
import { useEffect, useState } from 'react';
import * as professionalService from '../../../services/professional-service.ts';

export default function FinancialReports() {

  const [professionalLogged, setProfessionalLogged] = useState<ProfessionalLoggedDTO>();

  useEffect(() => {
    professionalService.findProfessionalLogged()
      .then(response => {
        setProfessionalLogged(response.data);
      })
  }, []);

  return (
    <>
      <section id="financial-reports-section" className="bcf-container-1200px">
        <div className='bcf-financial-reports-modal'>

          <ReturnGeneralPageButton />

          <h2>Relatório financeiro:</h2>
          <h3>Vizualize o total apurado no dia:</h3>

          <Link to={"/financial-reports/summary"}>
            <h4>Ver total apurado hoje no salão</h4>
          </Link>

          <Link to={"/financial-reports/professional-total-profit-in-live"}>
            <h4>Ver meu total apurado hoje</h4>
          </Link>

          {
            professionalLogged?.roles.some(role => role.authority === 'ROLE_ADMIN') &&
            <>
              <Link to={"/financial-reports/professional-total-profit-filtered"}>
                <h4>Filtrar total apurado por datas</h4>
              </Link>

              <Link to={"/financial-reports/professional-profit-group-by-date"}>
                <h4>Filtrar total dos profissionais por datas</h4>
              </Link>
            </>
          }

        </div>
      </section>
      <Outlet />
    </>
  );
}