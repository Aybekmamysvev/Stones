import React from 'react';
import './Header.scss';
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header className='header'>
            <div className="container">
                <div className="header__row">
                    <div className="header__box">
                        <div className="header__block">
                            <Link to='/' className="header__inner">
                                <h1 className="header__logo">
                                    <svg className={'header__logo-sec'} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10 0C6.12297 0 2.96875 3.15422 2.96875 7.03125C2.96875 8.34117 3.3316 9.61953 4.01832 10.7286L9.59977 19.723C9.70668 19.8953 9.89504 20 10.0976 20C10.0992 20 10.1007 20 10.1023 20C10.3066 19.9984 10.4954 19.8905 10.6003 19.7152L16.0395 10.6336C16.6883 9.54797 17.0312 8.3023 17.0312 7.03125C17.0312 3.15422 13.877 0 10 0ZM15.0338 10.032L10.0888 18.2885L5.01434 10.1112C4.44273 9.18805 4.13281 8.12305 4.13281 7.03125C4.13281 3.80039 6.76914 1.16406 10 1.16406C13.2309 1.16406 15.8633 3.80039 15.8633 7.03125C15.8633 8.09066 15.5738 9.12844 15.0338 10.032Z" fill="#B777BE"/>
                                        <path d="M10 3.51562C8.06148 3.51562 6.48438 5.09273 6.48438 7.03125C6.48438 8.95738 8.03582 10.5469 10 10.5469C11.9884 10.5469 13.5156 8.93621 13.5156 7.03125C13.5156 5.09273 11.9385 3.51562 10 3.51562ZM10 9.38281C8.7009 9.38281 7.64844 8.32684 7.64844 7.03125C7.64844 5.73891 8.70766 4.67969 10 4.67969C11.2923 4.67969 12.3477 5.73891 12.3477 7.03125C12.3477 8.30793 11.3197 9.38281 10 9.38281Z" fill="#B777BE"/>
                                    </svg>

                                </h1>
                                <h2 className="header__title">Москва</h2>
                            </Link>
                            <div className="header__wrapper">
                                <h3 className="header__subtitle">В вашем городе нет дилера</h3>
                                <h3 className="header__subtitle-sec">Станьте первым!</h3>
                            </div>

                        </div>
                    </div>
                    <div className="header__box">
                        <div className="header__letter">
                            <svg width="216" height="84" viewBox="0 0 216 84" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M113.496 22.6474C107.867 28.7405 102.652 35.2069 97.8843 42.0029C92.9753 48.8367 88.2514 55.9613 84.5856 63.5569L86.6845 62.6729C83.4408 59.6428 78.5896 58.7704 74.3687 58.0957C66.985 56.9325 59.399 56.9325 51.9517 57.1652C35.0386 57.7097 18.2058 59.7492 1.64789 63.2603L1.15642 64.1443C46.8346 40.863 93.86 21.1585 143.626 8.77051C144.204 8.63093 145.864 7.36886 144.43 7.72364C94.2937 20.2105 46.8346 40.0546 0.867315 63.5104C0.641815 63.6325 -0.618671 64.6096 0.381623 64.4002C16.2965 61.0614 32.4583 59.05 48.7022 58.3865C55.9108 58.0246 63.1364 58.2191 70.3155 58.9681C74.999 59.509 80.9603 60.3 84.5914 63.6849C85.0539 64.1211 86.4648 63.2719 86.6845 62.8066C90.3156 55.2517 95.0164 48.2725 99.8502 41.4737C104.604 34.6675 109.82 28.2002 115.462 22.1182C115.861 21.6936 113.866 22.2636 113.502 22.6474H113.496Z" fill="#1D1D1B"/>
                                <path d="M110.061 48.0691C108.811 47.7139 107.502 47.6117 106.212 47.7685C104.922 47.9252 103.675 48.3377 102.545 48.9822C101.174 49.7092 98.902 51.5761 99.1853 53.3965C99.4686 55.2169 102.435 54.3154 103.522 53.9432C106.37 53.0012 108.898 51.2743 110.819 48.9589C111.229 48.4529 109.182 49.1334 108.859 49.4882C107.841 50.5874 106.072 52.3962 106.546 54.0828C106.933 55.467 109.639 54.6993 110.466 54.4957C111.044 54.3561 112.704 53.0941 111.27 53.4547C106.852 54.5597 109.229 50.6746 110.819 48.9589L108.859 49.4882C107.644 51.022 106.049 52.2058 104.233 52.9196C103.505 53.2046 101.92 53.7164 101.388 52.8324C100.955 52.0996 101.683 51.0062 102.088 50.4653C103.528 48.5285 106.054 48.6042 108.147 49.1858C108.778 49.3602 110.345 48.1389 110.09 48.0691H110.061Z" fill="#1D1D1B"/>
                                <path d="M148.709 49.3718C147.437 50.3257 146.269 51.4714 146.396 53.1813C146.488 54.3445 147.882 54.3445 148.709 54.2572C152.108 54.0188 155.502 51.5063 157.578 48.9589C157.989 48.4529 155.948 49.1334 155.624 49.4882C155.208 49.9418 152.068 53.4721 153.6 54.234C155.132 54.9959 157.231 53.2569 158.284 52.4892C159.469 51.6052 157.434 52.0937 156.977 52.4427C156.098 53.0999 155.144 53.4663 155.502 52.053C155.803 50.8898 156.786 49.8429 157.578 48.9822L155.624 49.5114C154.184 51.2562 152.293 52.8207 149.981 53.1406C147.344 53.507 148.894 50.2675 149.981 49.4474C151.166 48.5634 149.136 49.052 148.674 49.3951L148.709 49.3718Z" fill="#1D1D1B"/>
                                <path d="M118.15 48.8542C116.023 48.7728 111.09 53.0301 114.479 54.3852C115.866 54.9668 117.711 53.3965 118.578 52.4892C120.538 50.4419 122.007 47.8887 123.51 45.51C125.904 41.7238 128.257 37.9493 130.749 34.2038C137.243 24.5202 144.736 15.331 154.126 8.3518C156.7 6.44724 159.425 4.75879 162.273 3.30354C163.713 2.56491 165.205 1.91353 166.714 1.31448C166.373 1.44825 166.673 0.837571 166.402 1.2854C165.517 2.72776 164.453 4.07706 163.453 5.438C153.496 18.9892 143.216 32.3019 133.27 45.8648C128.882 51.8494 124.459 57.8457 120.446 64.092C119.432 65.5046 118.576 67.026 117.896 68.6285C117.318 70.2744 119.59 69.0821 120.116 68.5122C125.575 62.6497 128.558 54.5538 135.323 49.8313C138.653 47.5049 138.255 52.3554 139.793 53.6465C142.383 55.8275 148.09 50.8549 149.842 49.5347C150.998 48.6448 148.992 49.1392 148.529 49.4881C147.205 50.4827 143.088 54.4491 141.533 52.2449C140.897 51.3434 140.868 50.0988 140.319 49.1334C139.018 46.8419 135.496 48.8193 134.011 49.7789C127.211 54.17 123.331 62.4112 118.491 68.6517C117.786 69.5648 119.879 68.8611 119.891 68.2795C119.912 68.0936 119.958 67.9115 120.03 67.7386C120.326 67.0005 120.69 66.2917 121.117 65.6216C122.493 63.2545 124.054 60.9979 125.603 58.7413C130.42 51.7622 135.485 44.911 140.55 38.0888C149.553 25.9684 159.006 14.1271 167.679 1.74486C167.847 1.50641 169.241 -0.191855 168.182 7.22595e-05C163.245 0.982971 158.064 4.59469 153.987 7.42125C144.777 13.8188 137.341 22.5079 130.9 31.6215C127.35 36.6523 124.152 41.9216 120.845 47.121C119.794 48.8337 118.651 50.4878 117.422 52.0762C117.065 52.588 116.63 53.0396 116.132 53.4139C116.583 53.1347 116.664 53.3325 116.317 53.1929C115.282 52.78 115.433 49.9476 116.485 49.9883C117.011 49.9883 118.798 48.8251 118.15 48.8251V48.8542Z" fill="#1D1D1B"/>
                                <path d="M159.197 46.964C157.393 51.797 165.222 50.8374 167.523 49.2438L165.887 49.4881C164.153 51.4364 162.586 55.6007 166.766 54.1874C169.559 53.2394 171.698 50.8955 173.959 49.1217C174.872 48.4121 175.208 49.2613 175.422 50.2849C175.757 51.8726 175.618 54.577 177.781 54.7224C182.135 55.0074 187.09 49.0344 189.692 46.4347L187.865 46.8244C177.856 57.6304 169.94 70.821 163.002 83.7441L165.02 82.7961C160.834 80.429 153.936 76.6137 153.918 71.013C153.918 66.7324 159.411 64.6503 162.487 63.1265C166.483 61.1491 170.513 59.2298 174.601 57.4327C178.455 55.7422 182.383 54.2242 186.384 52.8788C188.53 52.1518 190.704 51.5295 192.889 50.9363C193.884 50.6687 194.89 50.4245 195.89 50.186C197.214 49.8661 198.313 49.6044 197.411 51.1398C196.214 53.2743 194.277 55.0714 193.699 57.5141C193.363 58.9623 195.798 57.6072 196.139 57.2989C197.047 56.4847 197.399 55.0365 198.006 54.0187C198.838 52.7033 199.854 51.5161 201.025 50.4942C203.095 48.5866 206.373 46.3242 209.322 46.4231C210.704 46.458 210.293 47.5572 209.507 48.0108C208.303 48.6391 207.054 49.1775 205.772 49.6218C203.661 50.4535 201.111 51.1689 199.359 52.681C197.607 54.1932 200.296 54.6934 201.499 54.8969C205.65 55.6065 210.004 55.4785 214.219 55.5367C214.751 55.5367 216.497 54.3735 215.885 54.3735C211.781 54.4271 207.678 54.2329 203.598 53.7919C203.384 53.7919 199.857 53.2103 201.117 52.4019C203.939 50.6164 207.425 49.9534 210.368 48.3307C211.051 47.9643 212.352 47.2722 212.421 46.3707C212.548 44.6259 209.472 45.3413 208.628 45.5449C205.939 46.1846 203.395 47.6909 201.163 49.2845C199.928 50.1898 198.783 51.2144 197.746 52.3437C197.13 53.0266 196.571 53.76 196.075 54.5363C195.636 55.1994 195.167 57.0721 194.595 57.4443L195.988 57.0605C195.017 56.5312 199.706 50.3605 200.036 49.3252C200.579 47.72 194.208 49.7963 193.722 49.9068C184.777 52.2332 176.22 55.8275 167.87 59.794C163.944 61.6493 159.874 63.3941 156.22 65.7204C154.069 67.0988 152.109 69.1402 151.843 71.7865C151.264 77.3349 159.18 81.6736 163.1 83.907C163.632 84.2094 164.881 83.4126 165.124 82.959C172.005 70.1289 179.88 57.0198 189.825 46.2893C190.253 45.824 188.31 46.3707 188.003 46.6732C186.847 47.8363 180.094 55.7402 178.313 52.7915C177.48 51.4132 177.902 49.587 177.156 48.1737C176.283 46.5394 173.548 48.3947 172.652 49.0519C171.611 49.8196 167.032 54.5189 166.136 52.9951C165.436 51.8319 167.159 49.7033 167.87 48.9239C168.362 48.3772 166.431 49.0286 166.24 49.1624C164.158 50.6047 160.331 48.8251 161.331 46.1497C161.435 45.8647 159.452 46.3242 159.226 46.9291L159.197 46.964Z" fill="#1D1D1B"/>
                            </svg>
                        </div>
                    </div>
                    <div className="header__box">
                        <div className="header__wrapp">
                            <div className="header__number">
                                <a href="" className="header__link-num">+7 (930)-032-01-11</a><br/>
                                <a href="" className="header__link">Заказать обратный звонок</a>
                            </div>
                            <div className="header__socials">
                                <a href='#' className="header__icons">
                                    <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M18.54 1.19003L0.780003 8.16003C0.780003 8.16003 -0.0599966 8.45004 0.0100034 8.98003C0.0800034 9.51003 0.760003 9.75004 0.760003 9.75004L5.23 11.25L15.96 4.44003C15.96 4.44003 16.58 4.06003 16.56 4.44003C16.56 4.44003 16.67 4.51003 16.34 4.82003C16 5.13003 7.9 12.41 7.9 12.41L7.88 12.43L7.87 12.49L7.32 17.38C7.57 17.49 7.79 17.32 7.79 17.32L10.68 14.69L15.18 18.14C16.4 18.67 16.84 17.56 16.84 17.56L20 1.61003C20 0.550035 18.54 1.19003 18.54 1.19003Z" fill="#B777BE"/>
                                    </svg>

                                </a>
                                <a href='#' className="header__icons">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M17.981 11.2046C17.491 15.2646 14.581 15.5246 14.051 15.7046C13.821 15.7746 11.701 16.3146 9.04102 16.1446L6.15102 19.3446V15.6546L6.13102 15.6446C2.25102 14.5446 2.38102 10.4046 2.43102 8.23456C2.47102 6.06456 2.86102 4.29456 4.05102 3.09456C6.17102 1.12456 10.551 1.41456 10.551 1.41456C14.251 1.43456 16.021 2.57456 16.431 2.95456C17.791 4.15456 18.481 7.01456 17.981 11.2046ZM17.431 1.94456C16.941 1.48456 14.981 0.0245636 10.611 0.0145636C10.611 0.0145636 5.46102 -0.305436 2.95102 2.05456C1.55102 3.48456 1.06102 5.58456 1.01102 8.17456C0.961017 10.7746 0.891017 15.6446 5.47102 16.9646V18.9746C5.47102 18.9746 5.44102 19.7946 5.96102 19.9546C6.59102 20.1546 6.97102 19.5346 7.57102 18.8646C7.90102 18.4946 8.36102 17.9546 8.71102 17.5446C11.841 17.8146 14.261 17.1946 14.531 17.1046C15.161 16.8946 18.741 16.4246 19.331 11.5546C19.941 6.54456 19.051 3.37456 17.431 1.94456Z" fill="#B777BE"/>
                                        <path d="M14.641 11.8146C14.641 11.8146 14.051 11.3146 13.771 11.0946C13.501 10.8946 13.071 10.6146 12.831 10.4846C12.401 10.2346 11.961 10.3946 11.781 10.6346L11.401 11.1246C11.211 11.3746 10.911 11.3346 10.831 11.3146C10.271 11.1746 9.68096 10.8246 9.07096 10.2346C8.44096 9.63461 8.07096 9.01461 7.94096 8.36461L7.93096 8.32461C7.89096 8.05461 7.94096 7.93461 8.05096 7.75461L8.07096 7.73461C8.33096 7.49461 8.80096 7.20461 8.86096 6.93461C9.05096 6.45461 8.24096 5.45461 8.12096 5.28461C8.12096 5.28461 7.53096 4.50461 7.32096 4.35461C7.10096 4.17461 6.75096 4.06461 6.40096 4.28461L6.38096 4.29461C5.37096 4.97461 5.00096 5.37461 5.10096 5.96461L5.15096 6.19461C5.66096 7.81461 6.66096 9.54461 8.13096 11.0746C9.59096 12.5946 11.181 13.5046 12.731 14.1346C13.141 14.2646 13.561 14.1546 13.991 13.7846H14.001C14.331 13.4746 14.591 13.1446 14.791 12.7946V12.7846C14.981 12.4046 14.921 12.0546 14.641 11.8146Z" fill="#B777BE"/>
                                        <path d="M12.211 8.26455C12.151 8.26455 12.101 8.21455 12.091 8.15455C12.071 7.73455 11.961 7.41455 11.751 7.19455C11.551 6.98455 11.251 6.86455 10.851 6.84455C10.791 6.84455 10.741 6.78455 10.741 6.71455C10.741 6.64455 10.801 6.59455 10.861 6.60455C11.311 6.63455 11.671 6.77455 11.911 7.03455C12.151 7.29455 12.291 7.66455 12.311 8.14455C12.331 8.20455 12.281 8.26455 12.211 8.26455Z" fill="#B777BE"/>
                                        <path d="M13.371 8.66456C13.301 8.66456 13.251 8.60456 13.251 8.54456C13.271 7.73456 13.031 7.05456 12.551 6.51456C12.311 6.24456 12.021 6.03456 11.681 5.88456C11.341 5.73456 10.951 5.64456 10.521 5.60456C10.461 5.60456 10.411 5.54456 10.411 5.47456C10.411 5.40456 10.471 5.35456 10.531 5.36456C11.461 5.43456 12.201 5.76456 12.721 6.34456C13.241 6.92456 13.501 7.66456 13.481 8.53456C13.481 8.61456 13.431 8.66456 13.371 8.66456Z" fill="#B777BE"/>
                                        <path d="M14.551 9.13456C14.491 9.13456 14.431 9.08456 14.431 9.01456C14.421 8.30456 14.321 7.65456 14.111 7.09456C13.901 6.54456 13.591 6.05456 13.191 5.64456C12.781 5.23456 12.321 4.92456 11.811 4.72456C11.301 4.52456 10.741 4.41456 10.131 4.41456C10.071 4.41456 10.011 4.36456 10.011 4.29456C10.011 4.22456 10.061 4.17456 10.131 4.17456C11.411 4.18456 12.491 4.62456 13.351 5.48456C13.781 5.91456 14.111 6.43456 14.331 7.02456C14.551 7.60456 14.661 8.28456 14.671 9.02456C14.661 9.08456 14.611 9.13456 14.551 9.13456Z" fill="#B777BE"/>
                                    </svg>

                                </a>
                                <a href='#' className="header__icons">
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M15.3782 2.619C13.6876 0.927 11.4365 0 9.04068 0C4.09543 0 0.0813661 4.005 0.0723255 8.919C0.0723255 10.494 0.488197 12.024 1.2657 13.374L0 18L4.7554 16.758C6.0663 17.469 7.53993 17.847 9.04068 17.847C13.9769 17.847 18 13.842 18 8.928C18 6.543 17.0688 4.302 15.3782 2.619ZM9.04068 16.335C7.70266 16.335 6.39176 15.975 5.2436 15.3L4.97238 15.138L2.15168 15.876L2.90206 13.14L2.72125 12.861C1.97991 11.682 1.58212 10.314 1.58212 8.919C1.58212 4.833 4.92717 1.503 9.03164 1.503C11.0206 1.503 12.892 2.277 14.3024 3.681C15.7127 5.085 16.4812 6.948 16.4812 8.928C16.4812 13.014 13.1452 16.335 9.04068 16.335ZM13.1271 10.791C12.9011 10.683 11.7981 10.143 11.5992 10.062C11.3913 9.99 11.2466 9.954 11.0929 10.17C10.9392 10.395 10.5143 10.899 10.3877 11.043C10.2612 11.196 10.1256 11.214 9.89955 11.097C9.67353 10.989 8.95028 10.746 8.10045 9.99C7.43144 9.396 6.98845 8.667 6.85284 8.442C6.71723 8.226 6.83476 8.109 6.94324 8.001C7.05173 7.902 7.16926 7.74 7.28679 7.605C7.39528 7.479 7.43144 7.38 7.50377 7.236C7.57609 7.083 7.53993 6.957 7.48569 6.849C7.43144 6.732 6.98845 5.634 6.79859 5.193C6.61778 4.761 6.42793 4.815 6.29232 4.806C6.16575 4.797 6.01205 4.797 5.8674 4.797C5.71371 4.797 5.47865 4.851 5.27072 5.076C5.06278 5.301 4.48418 5.841 4.48418 6.939C4.48418 8.037 5.2888 9.099 5.39729 9.243C5.50578 9.396 6.97941 11.646 9.2215 12.609C9.7549 12.843 10.1708 12.978 10.4962 13.077C11.0296 13.248 11.5178 13.221 11.9066 13.167C12.3405 13.104 13.2356 12.627 13.4164 12.105C13.6062 11.583 13.6062 11.142 13.5429 11.043C13.4977 10.953 13.344 10.899 13.1271 10.791Z" fill="#B777BE"/>
                                    </svg>

                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="header__burger">
                        <div className="header__line"></div>
                        <div className="header__line"></div>
                        <div className="header__line"></div>
                    </div>
                </div>
                <div className="header__row-2">
                  <Link to='./catalog' className='header__link-page'>Каталог</Link>
                  <Link to='/card' className='header__link-page'>Карточка</Link>
                  <Link  className='header__link-page'>Идеи</Link>
                  <Link  className='header__link-page'>О компании</Link>
                  <Link  className='header__link-page'>Контакты</Link>
                </div>
            </div>

        </header>
    );
};

export default Header;