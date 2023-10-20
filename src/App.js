import React from "react";
import "./style.css";
import logoescrito from "./logo-escrito.png"
import purplelogo from "./logo.svg"
import logo from "./logo.png"
import desafio from "./desafio.png"

export const Inicial = () => {
    return (
        <div className="inicial">
            <div className="div">
                <div className="overlap">
                    <header className="header">
                        <img className="logo-escrito" alt="Logo escrito" src={logoescrito} />
                        <img className="logo" alt="Logo" src={logo} />
                        <div className="overlap-group">
                            <div className="purple-logo">
                                <img className="img" alt="Logo" src={purplelogo} />
                            </div>
                            <div className="dadosiniciais">
                                <div className="overlap-group-2">
                                    <div className="text-wrapper">Nome Sobrenome</div>
                                    <div className="text-wrapper-2">10500xp</div>
                                </div>
                            </div>
                            <div className="link-dicas">
                                <div className="text-wrapper-3">Dicas</div>
                            </div>
                            <div className="link-ranking">
                                <div className="text-wrapper-3">Ranking</div>
                            </div>
                            <div className="link-home">
                                <div className="text-wrapper-3">Home</div>
                            </div>
                        </div>
                    </header>
                </div>
                <img className="lateral" alt="Lateral" src="lateral.png" />
                <div className="contedo">
                    <div className="card-desafio">
                        <img className="imagem" alt="Imagem" src={desafio} />
                        <div className="text-media">
                            <div className="headline-text">
                                <div className="elemets-title">
                                    <div className="n-vel">INICIANTE</div>
                                    <div className="desafio">Atividade Física</div>
                                </div>
                                <p className="tipo">
                                    <span className="span">Tipo:</span>
                                    <span className="text-wrapper-4"> streak de 3 dias</span>
                                </p>
                            </div>
                        </div>
                        <div className="buttons">
                            <div className="button-textual">
                                <div className="ver-mais">VER MAIS</div>
                            </div>
                        </div>
                        <div className="buttons-2" />
                    </div>
                    <div className="card-desafio-2">
                        <img className="imagem" alt="Imagem" src={desafio} />
                        <div className="text-media">
                            <div className="headline-text">
                                <div className="elemets-title">
                                    <div className="n-vel">INTERMEDIÁRIO</div>
                                    <div className="desafio">Atividade Física</div>
                                </div>
                                <p className="tipo">
                                    <span className="span">Tipo:</span>
                                    <span className="text-wrapper-4"> streak de 5 dias</span>
                                </p>
                            </div>
                        </div>
                        <div className="buttons">
                            <div className="button-textual">
                                <div className="ver-mais">VER MAIS</div>
                            </div>
                        </div>
                        <div className="buttons-2" />
                    </div>
                    <div className="card-desafio-3">
                        <img className="imagem" alt="Imagem" src={desafio} />
                        <div className="text-media">
                            <div className="headline-text">
                                <div className="elemets-title">
                                    <div className="n-vel">AVANÇADO</div>
                                    <div className="desafio">Atividade Física</div>
                                </div>
                                <p className="tipo">
                                    <span className="span">Tipo:</span>
                                    <span className="text-wrapper-4"> streak de 7 dias</span>
                                </p>
                            </div>
                        </div>
                        <div className="buttons">
                            <div className="button-textual">
                                <div className="ver-mais">VER MAIS</div>
                            </div>
                        </div>
                        <div className="buttons-2" />
                    </div>
                    <div className="text-wrapper-5">Desafios</div>
                </div>
            </div>
        </div>
    );
};
