import React from "react";
import fintech from "src/assets/fintech.svg";
import resumo from "src/assets/icons/resumo.svg";
import vendas from "src/assets/icons/vendas.svg";
import webhooks from "src/assets/icons/webhooks.svg";
import configuracoes from "src/assets/icons/configuracoes.svg";
import contato from "src/assets/icons/contato.svg";
import sair from "src/assets/icons/sair.svg";
import FintechSVG from "src/assets/FintechSVG";
import { NavLink } from "react-router-dom";

const Sidenav = () => {
  return (
    <nav className="sidenav box bg-3">
      <FintechSVG title="Fintech" />

      <ul>
        <li>
          <span>
            <img src={resumo} alt="" />
          </span>
          <NavLink to="/">Resumo</NavLink>
        </li>
        <li>
          <span>
            <img src={vendas} alt="" />
          </span>
          <NavLink to="/vendas">Vendas</NavLink>
        </li>
        <li>
          <span>
            <img src={webhooks} alt="" />
          </span>
          <a href="">Webhooks</a>
        </li>
        <li>
          <span>
            <img src={configuracoes} alt="" />
          </span>
          <a href="">Configurações</a>
        </li>
        <li>
          <span>
            <img src={contato} alt="" />
          </span>
          <a href="">Contato</a>
        </li>
        <li>
          <span>
            <img src={sair} alt="" />
          </span>
          <a href="">Sair</a>
        </li>
      </ul>
    </nav>
  );
};

export default Sidenav;
