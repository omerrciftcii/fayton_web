<script setup>
import Header from './Header.vue';
</script>

<template>
    <div class="relative">
        <Header />
        <section
            class="w-full grid grid-cols-1 md:grid-cols-2 items-center p-5 sm:p-20 my-2"
        >
            <div class="space-y-3">
                <p
                    class="uppercase font-poppins text-sm text-[#DF6951] font-bold"
                ></p>
                <div
                    class="font-volkhov font-bold text-5xl md:text-6xl lg:text-8xl text-[#181E4B]"
                >
                    <div class="flex space-x-3">
                        <div>Fayton,</div>
                        <div class="relative">
                            Səyahətinizi,
                            <svg
                                class="absolute bottom-0 -left-4 w-44 sm:w-80"
                                viewBox="0 0 385 12"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <mask
                                    id="mask0_1_121"
                                    style="mask-type: alpha"
                                    maskUnits="userSpaceOnUse"
                                    x="0"
                                    y="0"
                                    width="385"
                                    height="12"
                                >
                                    <rect
                                        width="385"
                                        height="12"
                                        fill="#C4C4C4"
                                    />
                                </mask>
                            </svg>
                        </div>
                    </div>
                    <div>Asanlaşdırır</div>
                </div>
                <p class="font-poppins text-gray-500 text-sm">
                    Bir şəhərdən digər şəhərə səyahət etmək istəyirsiniz? Bu
                    tətbiq ilə Azərbaycan daxilində bütün rayonlara gedən
                    taksiləri axtarip tapa və əlaqə yarada bilərsiz!
                </p>
                <div class="flex items-center space-x-3">
                    <button
                        type="button"
                        aria-label="Find out more"
                        class="block bg-[#F1A501] text-white p-3 text-sm font-poppins rounded-md"
                    >
                        Find out more
                    </button>
                    <button
                        type="button"
                        aria-label="Play demo"
                        class="font-poppins flex mt-5"
                        @click=""
                    >
                        <svg
                            class="w-20"
                            viewBox="0 0 112 112"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g filter="url(#filter0_d_1_131)">
                                <circle cx="56" cy="41" r="26" fill="#DF6951" />
                            </g>
                            <path
                                d="M64 42.5L52.75 48.9952L52.75 36.0048L64 42.5Z"
                                fill="white"
                            />
                            <defs>
                                <filter
                                    id="filter0_d_1_131"
                                    x="0"
                                    y="0"
                                    width="112"
                                    height="112"
                                    filterUnits="userSpaceOnUse"
                                    color-interpolation-filters="sRGB"
                                >
                                    <feFlood
                                        flood-opacity="0"
                                        result="BackgroundImageFix"
                                    />
                                    <feColorMatrix
                                        in="SourceAlpha"
                                        type="matrix"
                                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                        result="hardAlpha"
                                    />
                                    <feOffset dy="15" />
                                    <feGaussianBlur stdDeviation="15" />
                                    <feColorMatrix
                                        type="matrix"
                                        values="0 0 0 0 0.87451 0 0 0 0 0.411765 0 0 0 0 0.317647 0 0 0 0.3 0"
                                    />
                                    <feBlend
                                        mode="normal"
                                        in2="BackgroundImageFix"
                                        result="effect1_dropShadow_1_131"
                                    />
                                    <feBlend
                                        mode="normal"
                                        in="SourceGraphic"
                                        in2="effect1_dropShadow_1_131"
                                        result="shape"
                                    />
                                </filter>
                            </defs>
                        </svg>
                        <p class="mt-5">Play Demo</p>
                    </button>
                </div>
            </div>
            <div>
                <img
                    src="/images/travel-girl.png"
                    height="764"
                    alt="travel-girl"
                    sizes="sm:100vw md:50vw lg:400px"
                />
                <svg
                    class="absolute top-0 right-0 w-[35rem] -z-10"
                    viewBox="0 0 704 724"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M22.3069 222C-18.0931 153.2 5.4736 13.3333 22.3069 -48L701.807 -149L766.307 122.5L727.807 723.5C649.14 724.5 473.707 717 401.307 679C310.807 631.5 351.807 555 276.807 515C201.807 475 244.807 369.5 218.807 329.5C192.807 289.5 72.8069 308 22.3069 222Z"
                        fill="#FFF1DA"
                    />
                </svg>
            </div>
        </section>
    </div>
</template>
