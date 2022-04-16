import React , { useState ,useEffect } from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios'; 
import Header from '../common/header';
function Home(props) {
    const bearertoken = props.Token;
    /*useEffect(() => {           

    }, []); */
    return ( 
        <div id="layoutDrawer_content">
        
        <main>
            
            <div class="container-xl p-5">
                <div class="row justify-content-between align-items-center mb-5">
                    <div class="col flex-shrink-0 mb-5 mb-md-0">
                        <h1 class="display-4 mb-0">Dashboard</h1>
                        <div class="text-muted">Sales overview &amp; summary</div>
                    </div>
                   
                </div>
              
                <div class="row gx-5">
                    <div class="col-xxl-3 col-md-6 mb-5">
                        <div class="card card-raised bg-primary text-white">
                            <div class="card-body px-4">
                                <div class="d-flex justify-content-between align-items-center mb-2">
                                    <div class="me-2">
                                        <div class="display-5 text-white">101.1K</div>
                                        <div class="card-text">Downloads</div>
                                    </div>
                                    <div class="icon-circle bg-white-50 text-primary"><i class="material-icons">download</i></div>
                                </div>
                                <div class="card-text">
                                    <div class="d-inline-flex align-items-center">
                                        <i class="material-icons icon-xs">arrow_upward</i>
                                        <div class="caption fw-500 me-2">3%</div>
                                        <div class="caption">from last month</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xxl-3 col-md-6 mb-5">
                        <div class="card card-raised bg-warning text-white">
                            <div class="card-body px-4">
                                <div class="d-flex justify-content-between align-items-center mb-2">
                                    <div class="me-2">
                                        <div class="display-5 text-white">12.2K</div>
                                        <div class="card-text">Purchases</div>
                                    </div>
                                    <div class="icon-circle bg-white-50 text-warning"><i class="material-icons">storefront</i></div>
                                </div>
                                <div class="card-text">
                                    <div class="d-inline-flex align-items-center">
                                        <i class="material-icons icon-xs">arrow_upward</i>
                                        <div class="caption fw-500 me-2">3%</div>
                                        <div class="caption">from last month</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xxl-3 col-md-6 mb-5">
                        <div class="card card-raised bg-secondary text-white">
                            <div class="card-body px-4">
                                <div class="d-flex justify-content-between align-items-center mb-2">
                                    <div class="me-2">
                                        <div class="display-5 text-white">5.3K</div>
                                        <div class="card-text">Customers</div>
                                    </div>
                                    <div class="icon-circle bg-white-50 text-secondary"><i class="material-icons">people</i></div>
                                </div>
                                <div class="card-text">
                                    <div class="d-inline-flex align-items-center">
                                        <i class="material-icons icon-xs">arrow_upward</i>
                                        <div class="caption fw-500 me-2">3%</div>
                                        <div class="caption">from last month</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xxl-3 col-md-6 mb-5">
                        <div class="card card-raised bg-info text-white">
                            <div class="card-body px-4">
                                <div class="d-flex justify-content-between align-items-center mb-2">
                                    <div class="me-2">
                                        <div class="display-5 text-white">7</div>
                                        <div class="card-text">Channels</div>
                                    </div>
                                    <div class="icon-circle bg-white-50 text-info"><i class="material-icons">devices</i></div>
                                </div>
                                <div class="card-text">
                                    <div class="d-inline-flex align-items-center">
                                        <i class="material-icons icon-xs">arrow_upward</i>
                                        <div class="caption fw-500 me-2">3%</div>
                                        <div class="caption">from last month</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row gx-5">
                   
                    <div class="col-lg-8 mb-5">
                        <div class="card card-raised h-100">
                            <div class="card-header bg-primary text-white px-4">
                                <div class="d-flex justify-content-between align-items-center">
                                    <div class="me-4">
                                        <h2 class="card-title text-white mb-0">Revenue Breakdown</h2>
                                        <div class="card-subtitle">Compared to previous year</div>
                                    </div>
                                    <div class="d-flex gap-2 me-n2">
                                        <button class="btn btn-lg btn-text-white btn-icon" type="button"><i class="material-icons">download</i></button>
                                        <button class="btn btn-lg btn-text-white btn-icon" type="button"><i class="material-icons">print</i></button>
                                    </div>
                                </div>
                            </div>
                            <div class="card-body p-4">
                                <div class="row gx-4">
                                    <div class="col-12 col-xxl-2">
                                        <div class="d-flex flex-column flex-md-row flex-xxl-column align-items-center align-items-xl-start justify-content-between">
                                            <div class="mb-4 text-center text-md-start">
                                                <div class="text-xs font-monospace text-muted mb-1">Actual Revenue</div>
                                                <div class="display-5 fw-500">$59,482</div>
                                            </div>
                                            <div class="mb-4 text-center text-md-start">
                                                <div class="text-xs font-monospace text-muted mb-1">Revenue Target</div>
                                                <div class="display-5 fw-500">$50,000</div>
                                            </div>
                                            <div class="mb-4 text-center text-md-start">
                                                <div class="text-xs font-monospace text-muted mb-1">Goal</div>
                                                <div class="display-5 fw-500 text-success">119%</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-12 col-xxl-10"><canvas id="dashboardBarChart"></canvas></div>
                                </div>
                            </div>
                            <div class="card-footer bg-transparent position-relative ripple-gray">
                                <a class="d-flex align-items-center justify-content-end text-decoration-none stretched-link text-primary" href="#!">
                                    <div class="fst-button">Open Report</div>
                                    <i class="material-icons icon-sm ms-1">chevron_right</i>
                                </a>
                            </div>
                        </div>
                    </div>
             
                    <div class="col-lg-4 mb-5">
                        <div class="card card-raised h-100">
                            <div class="card-header bg-primary text-white px-4">
                                <div class="d-flex justify-content-between align-items-center">
                                    <div class="me-4">
                                        <h2 class="card-title text-white mb-0">Segments</h2>
                                        <div class="card-subtitle">Revenue sources</div>
                                    </div>
                                    <div class="dropdown">
                                        <button class="btn btn-lg btn-text-light btn-icon me-n2 dropdown-toggle" id="segmentsDropdownButton" type="button" data-bs-toggle="dropdown" aria-expanded="false"><i class="material-icons">more_vert</i></button>
                                        <ul class="dropdown-menu" aria-labelledby="segmentsDropdownButton">
                                            <li><a class="dropdown-item" href="#!">Action</a></li>
                                            <li><a class="dropdown-item" href="#!">Another action</a></li>
                                            <li><a class="dropdown-item" href="#!">Something else here</a></li>
                                            <li><hr class="dropdown-divider" /></li>
                                            <li><a class="dropdown-item" href="#!">Separated link</a></li>
                                            <li><a class="dropdown-item" href="#!">Separated link</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="card-body p-4">
                                <div class="d-flex h-100 w-100 align-items-center justify-content-center">
                                    <div class="w-100"><canvas id="myPieChart"></canvas></div>
                                </div>
                            </div>
                            <div class="card-footer bg-transparent position-relative ripple-gray">
                                <a class="d-flex align-items-center justify-content-end text-decoration-none stretched-link text-primary" href="#!">
                                    <div class="fst-button">Open Report</div>
                                    <i class="material-icons icon-sm ms-1">chevron_right</i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row gx-5">
           
                    <div class="col-xl-6 mb-5">
                        <div class="card card-raised h-100">
                            <div class="card-body p-4">
                                <div class="d-flex justify-content-between">
                                    <div class="me-4">
                                        <h2 class="card-title mb-0">Privacy Suggestions</h2>
                                        <p class="card-text">Take our privacy checkup to choose which settings are right for you.</p>
                                    </div>
                                    <img  />
                                </div>
                            </div>
                            <div class="card-footer bg-transparent position-relative ripple-gray px-4"><a class="stretched-link text-decoration-none" href="#!">Review suggestions (4)</a></div>
                        </div>
                    </div>
    
                    <div class="col-xl-6 mb-5">
                        <div class="card card-raised h-100">
                            <div class="card-body p-4">
                                <div class="d-flex justify-content-between">
                                    <div class="me-4">
                                        <h2 class="card-title mb-0">Account Storage</h2>
                                        <p class="card-text">Your account storage is shared across all devices.</p>
                                        <div class="progress mb-2" ><div class="progress-bar" role="progressbar" aria-valuenow="10" aria-valuemin="0" aria-valuemax="30"></div></div>
                                        <div class="card-text">10 GB of 30 GB used</div>
                                    </div>
                                    <img  />
                                </div>
                            </div>
                            <div class="card-footer bg-transparent position-relative ripple-gray px-4"><a class="stretched-link text-decoration-none" href="#!">Manage storage</a></div>
                        </div>
                    </div>
                </div>
                <div class="card card-raised">
                    <div class="card-header bg-primary text-white px-4">
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="me-4">
                                <h2 class="card-title text-white mb-0">Orders</h2>
                                <div class="card-subtitle">Details and history</div>
                            </div>
                            <div class="d-flex gap-2">
                                <button class="btn btn-lg btn-text-white btn-icon" type="button"><i class="material-icons">download</i></button>
                                <button class="btn btn-lg btn-text-white btn-icon" type="button"><i class="material-icons">print</i></button>
                            </div>
                        </div>
                    </div>
                    <div class="card-body p-4">

                       
                    </div>
                </div>
            </div>
        </main>

        <footer class="py-4 mt-auto border-top">
            <div class="container-xl px-5">
                <div class="d-flex flex-column flex-sm-row align-items-center justify-content-sm-between small">
                    <div class="me-sm-2">Copyright © Your Website 2021</div>
                    <div class="d-flex ms-sm-2">
                        <a class="text-decoration-none" href="#!">Privacy Policy</a>
                        <div class="mx-1">·</div>
                        <a class="text-decoration-none" href="#!">Terms &amp; Conditions</a>
                    </div>
                </div>
            </div>
        </footer>
    </div>

    );
}
export default Home;