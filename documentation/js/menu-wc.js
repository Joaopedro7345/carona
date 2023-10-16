'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">carona documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-AppModule-2c3e286c9e91a79e40d5dc5b63a8c60786320f6e198d3b2950dd4fb162d8b9c9bb47fa2a395e9e1b33dcbe40c1c6d84e0facdaa60f0ca6ba964678858abe8745"' : 'data-bs-target="#xs-components-links-module-AppModule-2c3e286c9e91a79e40d5dc5b63a8c60786320f6e198d3b2950dd4fb162d8b9c9bb47fa2a395e9e1b33dcbe40c1c6d84e0facdaa60f0ca6ba964678858abe8745"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-2c3e286c9e91a79e40d5dc5b63a8c60786320f6e198d3b2950dd4fb162d8b9c9bb47fa2a395e9e1b33dcbe40c1c6d84e0facdaa60f0ca6ba964678858abe8745"' :
                                            'id="xs-components-links-module-AppModule-2c3e286c9e91a79e40d5dc5b63a8c60786320f6e198d3b2950dd4fb162d8b9c9bb47fa2a395e9e1b33dcbe40c1c6d84e0facdaa60f0ca6ba964678858abe8745"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CadastroSitePageModule.html" data-type="entity-link" >CadastroSitePageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-CadastroSitePageModule-530f3f7541c50ffd3e9b92488cef088f160a81e82f99437ebebf199171dd9aa41f87007b01eda8a84cd6ec12d8bc4c546426489a2e7007021fc1e3b4bfeed626"' : 'data-bs-target="#xs-components-links-module-CadastroSitePageModule-530f3f7541c50ffd3e9b92488cef088f160a81e82f99437ebebf199171dd9aa41f87007b01eda8a84cd6ec12d8bc4c546426489a2e7007021fc1e3b4bfeed626"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CadastroSitePageModule-530f3f7541c50ffd3e9b92488cef088f160a81e82f99437ebebf199171dd9aa41f87007b01eda8a84cd6ec12d8bc4c546426489a2e7007021fc1e3b4bfeed626"' :
                                            'id="xs-components-links-module-CadastroSitePageModule-530f3f7541c50ffd3e9b92488cef088f160a81e82f99437ebebf199171dd9aa41f87007b01eda8a84cd6ec12d8bc4c546426489a2e7007021fc1e3b4bfeed626"' }>
                                            <li class="link">
                                                <a href="components/CadastroSitePage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CadastroSitePage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/CadastroSitePageRoutingModule.html" data-type="entity-link" >CadastroSitePageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CaronaUserPageModule.html" data-type="entity-link" >CaronaUserPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-CaronaUserPageModule-8f6e1e7096ad5b8feba4a7e8a9371b0ee1eb61be3ba825af0bd3eb4cdeb05725a2033ff13c1133f2229cfb737ea1ff6972612b88e5ca787f224ee6f522775b77"' : 'data-bs-target="#xs-components-links-module-CaronaUserPageModule-8f6e1e7096ad5b8feba4a7e8a9371b0ee1eb61be3ba825af0bd3eb4cdeb05725a2033ff13c1133f2229cfb737ea1ff6972612b88e5ca787f224ee6f522775b77"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CaronaUserPageModule-8f6e1e7096ad5b8feba4a7e8a9371b0ee1eb61be3ba825af0bd3eb4cdeb05725a2033ff13c1133f2229cfb737ea1ff6972612b88e5ca787f224ee6f522775b77"' :
                                            'id="xs-components-links-module-CaronaUserPageModule-8f6e1e7096ad5b8feba4a7e8a9371b0ee1eb61be3ba825af0bd3eb4cdeb05725a2033ff13c1133f2229cfb737ea1ff6972612b88e5ca787f224ee6f522775b77"' }>
                                            <li class="link">
                                                <a href="components/CaronaUserPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CaronaUserPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/CaronaUserPageRoutingModule.html" data-type="entity-link" >CaronaUserPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/HomePageModule.html" data-type="entity-link" >HomePageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-HomePageModule-505138d4b0b902820bf04bf9e711dc5c228dc709f7eb29e730938c67b74c1e14c0502b3e3088157496bc55ca02f2a16dd453cf16dfda29790b02c7c447c557e6"' : 'data-bs-target="#xs-components-links-module-HomePageModule-505138d4b0b902820bf04bf9e711dc5c228dc709f7eb29e730938c67b74c1e14c0502b3e3088157496bc55ca02f2a16dd453cf16dfda29790b02c7c447c557e6"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-HomePageModule-505138d4b0b902820bf04bf9e711dc5c228dc709f7eb29e730938c67b74c1e14c0502b3e3088157496bc55ca02f2a16dd453cf16dfda29790b02c7c447c557e6"' :
                                            'id="xs-components-links-module-HomePageModule-505138d4b0b902820bf04bf9e711dc5c228dc709f7eb29e730938c67b74c1e14c0502b3e3088157496bc55ca02f2a16dd453cf16dfda29790b02c7c447c557e6"' }>
                                            <li class="link">
                                                <a href="components/HomePage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HomePage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/HomePageRoutingModule.html" data-type="entity-link" >HomePageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/LoginSitePageModule.html" data-type="entity-link" >LoginSitePageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-LoginSitePageModule-7014ba87f5b209125e5a4fbf6dc3c4f0aba26e172dc51a2852ae995891a30fbc5430f55881bafa2c57adc1b922afd8c2b0caa2dcec71b17319d36c25f5a9301a"' : 'data-bs-target="#xs-components-links-module-LoginSitePageModule-7014ba87f5b209125e5a4fbf6dc3c4f0aba26e172dc51a2852ae995891a30fbc5430f55881bafa2c57adc1b922afd8c2b0caa2dcec71b17319d36c25f5a9301a"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-LoginSitePageModule-7014ba87f5b209125e5a4fbf6dc3c4f0aba26e172dc51a2852ae995891a30fbc5430f55881bafa2c57adc1b922afd8c2b0caa2dcec71b17319d36c25f5a9301a"' :
                                            'id="xs-components-links-module-LoginSitePageModule-7014ba87f5b209125e5a4fbf6dc3c4f0aba26e172dc51a2852ae995891a30fbc5430f55881bafa2c57adc1b922afd8c2b0caa2dcec71b17319d36c25f5a9301a"' }>
                                            <li class="link">
                                                <a href="components/LoginSitePage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginSitePage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/LoginSitePageRoutingModule.html" data-type="entity-link" >LoginSitePageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/MapaPageModule.html" data-type="entity-link" >MapaPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-MapaPageModule-d102f7312995475dac6ccac2f67df24fcc7dae04c475983253ebd47d2c6c422185b673173817fa6333bc1956f366facb22e671490f29de6f313f6c7ce6d75fab"' : 'data-bs-target="#xs-components-links-module-MapaPageModule-d102f7312995475dac6ccac2f67df24fcc7dae04c475983253ebd47d2c6c422185b673173817fa6333bc1956f366facb22e671490f29de6f313f6c7ce6d75fab"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-MapaPageModule-d102f7312995475dac6ccac2f67df24fcc7dae04c475983253ebd47d2c6c422185b673173817fa6333bc1956f366facb22e671490f29de6f313f6c7ce6d75fab"' :
                                            'id="xs-components-links-module-MapaPageModule-d102f7312995475dac6ccac2f67df24fcc7dae04c475983253ebd47d2c6c422185b673173817fa6333bc1956f366facb22e671490f29de6f313f6c7ce6d75fab"' }>
                                            <li class="link">
                                                <a href="components/MapaPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MapaPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/MapaPageRoutingModule.html" data-type="entity-link" >MapaPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/MensagemPageModule.html" data-type="entity-link" >MensagemPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-MensagemPageModule-c40deae37638333d08f803f331d466f922a727f309641ff9a0eae8583975adfef71935ec38cf4ffca817dc922c3e90f84438bc4231c1794b3f4e122f1efdb9a2"' : 'data-bs-target="#xs-components-links-module-MensagemPageModule-c40deae37638333d08f803f331d466f922a727f309641ff9a0eae8583975adfef71935ec38cf4ffca817dc922c3e90f84438bc4231c1794b3f4e122f1efdb9a2"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-MensagemPageModule-c40deae37638333d08f803f331d466f922a727f309641ff9a0eae8583975adfef71935ec38cf4ffca817dc922c3e90f84438bc4231c1794b3f4e122f1efdb9a2"' :
                                            'id="xs-components-links-module-MensagemPageModule-c40deae37638333d08f803f331d466f922a727f309641ff9a0eae8583975adfef71935ec38cf4ffca817dc922c3e90f84438bc4231c1794b3f4e122f1efdb9a2"' }>
                                            <li class="link">
                                                <a href="components/MensagemPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MensagemPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/MensagemPageRoutingModule.html" data-type="entity-link" >MensagemPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/MotoristaPageModule.html" data-type="entity-link" >MotoristaPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-MotoristaPageModule-2a1b2cc427524c172eb82aea43ec838df094758f0df250b6766e92e272e5cecaf47923130da24c730f6a47557624ca9d768d4b113ce05a3f61ce63b63a3efd88"' : 'data-bs-target="#xs-components-links-module-MotoristaPageModule-2a1b2cc427524c172eb82aea43ec838df094758f0df250b6766e92e272e5cecaf47923130da24c730f6a47557624ca9d768d4b113ce05a3f61ce63b63a3efd88"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-MotoristaPageModule-2a1b2cc427524c172eb82aea43ec838df094758f0df250b6766e92e272e5cecaf47923130da24c730f6a47557624ca9d768d4b113ce05a3f61ce63b63a3efd88"' :
                                            'id="xs-components-links-module-MotoristaPageModule-2a1b2cc427524c172eb82aea43ec838df094758f0df250b6766e92e272e5cecaf47923130da24c730f6a47557624ca9d768d4b113ce05a3f61ce63b63a3efd88"' }>
                                            <li class="link">
                                                <a href="components/MotoristaPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MotoristaPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/MotoristaPageRoutingModule.html" data-type="entity-link" >MotoristaPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/PerfilPageModule.html" data-type="entity-link" >PerfilPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-PerfilPageModule-1cd432bc27d5f36ee99c3292542c8d9a1e6bf14d550f6718cdc28907a683497bec9e9cd2129ccbea7b9ab07a5d70c35716a217d58c74293ce98aad625cd62d9d"' : 'data-bs-target="#xs-components-links-module-PerfilPageModule-1cd432bc27d5f36ee99c3292542c8d9a1e6bf14d550f6718cdc28907a683497bec9e9cd2129ccbea7b9ab07a5d70c35716a217d58c74293ce98aad625cd62d9d"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PerfilPageModule-1cd432bc27d5f36ee99c3292542c8d9a1e6bf14d550f6718cdc28907a683497bec9e9cd2129ccbea7b9ab07a5d70c35716a217d58c74293ce98aad625cd62d9d"' :
                                            'id="xs-components-links-module-PerfilPageModule-1cd432bc27d5f36ee99c3292542c8d9a1e6bf14d550f6718cdc28907a683497bec9e9cd2129ccbea7b9ab07a5d70c35716a217d58c74293ce98aad625cd62d9d"' }>
                                            <li class="link">
                                                <a href="components/PerfilPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PerfilPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PerfilPageRoutingModule.html" data-type="entity-link" >PerfilPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/UsuarioListarPageModule.html" data-type="entity-link" >UsuarioListarPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-UsuarioListarPageModule-b84cc13338954f449b080198a068c4643618ee9935bdc3ed8e42064718ee3a42e515b0d6d5ffa777f86259bc255fc669d1c8759b51e0271289b2f13427f3775a"' : 'data-bs-target="#xs-components-links-module-UsuarioListarPageModule-b84cc13338954f449b080198a068c4643618ee9935bdc3ed8e42064718ee3a42e515b0d6d5ffa777f86259bc255fc669d1c8759b51e0271289b2f13427f3775a"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-UsuarioListarPageModule-b84cc13338954f449b080198a068c4643618ee9935bdc3ed8e42064718ee3a42e515b0d6d5ffa777f86259bc255fc669d1c8759b51e0271289b2f13427f3775a"' :
                                            'id="xs-components-links-module-UsuarioListarPageModule-b84cc13338954f449b080198a068c4643618ee9935bdc3ed8e42064718ee3a42e515b0d6d5ffa777f86259bc255fc669d1c8759b51e0271289b2f13427f3775a"' }>
                                            <li class="link">
                                                <a href="components/UsuarioListarPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsuarioListarPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/UsuarioListarPageRoutingModule.html" data-type="entity-link" >UsuarioListarPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/VerificarPageModule.html" data-type="entity-link" >VerificarPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-VerificarPageModule-82824eb6e2ca0067f51bd47e6cdeb68c1910d35c186448e391d02599dde8f228b68a8c5fa80e5a0b0c79e1e81359fb26752c1ac539282535143f9374176ccb0e"' : 'data-bs-target="#xs-components-links-module-VerificarPageModule-82824eb6e2ca0067f51bd47e6cdeb68c1910d35c186448e391d02599dde8f228b68a8c5fa80e5a0b0c79e1e81359fb26752c1ac539282535143f9374176ccb0e"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-VerificarPageModule-82824eb6e2ca0067f51bd47e6cdeb68c1910d35c186448e391d02599dde8f228b68a8c5fa80e5a0b0c79e1e81359fb26752c1ac539282535143f9374176ccb0e"' :
                                            'id="xs-components-links-module-VerificarPageModule-82824eb6e2ca0067f51bd47e6cdeb68c1910d35c186448e391d02599dde8f228b68a8c5fa80e5a0b0c79e1e81359fb26752c1ac539282535143f9374176ccb0e"' }>
                                            <li class="link">
                                                <a href="components/VerificarPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >VerificarPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/VerificarPageRoutingModule.html" data-type="entity-link" >VerificarPageRoutingModule</a>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/RequisicaoService.html" data-type="entity-link" >RequisicaoService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});