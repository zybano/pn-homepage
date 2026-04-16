import arrowRightSvg from '../assets/figma-assets/hero/icon-arrow-right.svg';
import bgCircleSvg from '../assets/figma-assets/hero/bg-circle.svg';
import playSvg from '../assets/figma-assets/hero/icon-play.svg';
import shieldSvg from '../assets/figma-assets/hero/icon-shield.svg';
import starSvg from '../assets/figma-assets/hero/icon-star.svg';
import doctor1Png from '../assets/figma-assets/hero/doctor-1.png';
import doctor2Png from '../assets/figma-assets/hero/doctor-2.png';
import doctor3Png from '../assets/figma-assets/hero/doctor-3.png';

const waveformHeights = [
  24.542, 26.352, 25.039, 29.239, 21.078, 8.879, 2.009, 8.902, 12.661, 16.849, 36.063, 10.455, 14.724, 7.785, 5.024, 7.843,
];

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-brand-bg">
      <div className="container-custom relative z-10 pb-[92px] pt-[21px]">
        <div className="grid items-center gap-[40px] lg:grid-cols-2">
          <div className="flex max-w-[649px] flex-col gap-[40px]">
            <div className="flex flex-col gap-[24px]">
              <div className="inline-flex h-[29px] items-center gap-[8px] rounded-full border border-[#cfd4ff] bg-[#edefff] p-[10px]">
                <div className="h-[6px] w-[6px] rounded-full bg-[#5768fd] opacity-60" />
                <p className="font-mono text-[12px] leading-[16px] text-[#5768fd]">100% HIPAA Compliant · Ambient AI Scribe</p>
              </div>

              <div className="flex flex-col gap-[16px]">
                <div className="text-[60px] font-semibold tracking-[-1.5px] text-[#040523]">
                  <p className="leading-[90px]">Just talk.</p>
                </div>

                <p className="text-[60px] font-bold tracking-[-1.2px] text-[#040523]">
                  <span className="bg-gradient-to-b from-[#5768fd] from-[77.404%] to-white bg-clip-text font-bold leading-[69px] text-transparent">
                    Precision Notes
                  </span>
                  <span className="leading-[69px]">{` writes your SOAP notes.`}</span>
                </p>

                <p className="text-[18px] leading-[27px] text-[#64748b]">
                  PrecisionNote captures every clinical detail in real-time, delivering structured, HIPAA-compliant SOAP notes directly to your EHR.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-[16px]">
                <button className="inline-flex items-center justify-center gap-[8px] rounded-[8px] bg-[#5768fd] px-[32px] py-[12px] shadow-[0px_4px_14px_0px_rgba(87,104,253,0.35)]">
                  <span className="text-[16px] font-semibold leading-[24px] text-white">Try Free for 14 Days</span>
                  <span className="relative h-[16px] w-[16px] overflow-hidden">
                    <img alt="" className="absolute inset-[17.71%]" src={arrowRightSvg} />
                  </span>
                </button>

                <button className="inline-flex items-center justify-center gap-[8px] rounded-[8px] border border-[#e2e8f0] bg-[#f1f5f9] px-[32px] py-[12px]">
                  <span className="relative h-[16px] w-[16px] overflow-hidden">
                    <img alt="" className="absolute inset-[9.38%_13.54%_9.38%_21.88%]" src={playSvg} />
                  </span>
                  <span className="text-[16px] font-medium leading-[24px] text-[#040523]">Watch 1-Min Demo</span>
                </button>
              </div>
            </div>

            <div className="flex w-[287px] items-center gap-[12px]">
              <div className="relative h-[32px] w-[80px]">
                <div className="absolute left-0 top-0 h-[32px] w-[32px] rounded-full border-2 border-white">
                  <img alt="" className="h-full w-full rounded-full object-cover" src={doctor1Png} />
                </div>
                <div className="absolute left-[24px] top-0 h-[32px] w-[32px] rounded-full border-2 border-white">
                  <img alt="" className="h-full w-full rounded-full object-cover" src={doctor2Png} />
                </div>
                <div className="absolute left-[48px] top-0 h-[32px] w-[32px] rounded-full border-2 border-white">
                  <img alt="" className="h-full w-full rounded-full object-cover" src={doctor3Png} />
                </div>
              </div>

              <div className="relative h-[38px] w-[195px]">
                <div className="absolute left-0 top-0 flex h-[12px] items-center gap-[4px]">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <span key={idx} className="relative h-[12px] w-[12px]">
                      <img alt="" className="absolute inset-0 h-full w-full" src={starSvg} />
                    </span>
                  ))}
                </div>
                <p className="absolute left-0 top-[20px] whitespace-nowrap text-[12px] leading-[16px] text-[#62748e]">
                  Loved by <span className="font-medium text-[#040523]">500+ Nigerian physicians</span>
                </p>
              </div>
            </div>
          </div>

          <div className="relative hidden h-[800px] w-full lg:block">
            <div className="absolute left-[calc(79.17%-70px)] top-[calc(50%+44px)] h-[800px] w-[740px] -translate-x-1/2 -translate-y-1/2 overflow-hidden">
              <div className="absolute inset-[0_-63.24%_-51%_0]">
                <img alt="" className="absolute inset-0 h-full w-full" src={bgCircleSvg} />
              </div>

              <div className="absolute inset-[30%_7.56%_23.75%_7.43%]">
                <div
                  className="absolute left-0 top-0 h-[370px] w-[629.093px] rounded-[26.707px] opacity-20 blur-[71.218px]"
                  style={{ backgroundImage: 'linear-gradient(149.53814780895965deg, rgb(87, 104, 253) 0%, rgb(139, 159, 255) 100%)' }}
                />

                <div className="absolute left-[24.61px] top-[-0.4px] h-[370.556px] w-[578.647px]">
                  <div className="absolute left-0 top-0 flex h-[370.803px] w-[578.62px] flex-col items-start overflow-hidden rounded-[17.805px] pl-[11.175px] pr-[11.08px] pt-[11.166px] shadow-[0px_44.511px_89.023px_0px_rgba(4,5,35,0.35),0px_0px_0px_1.113px_rgba(255,255,255,0.08)]">
                    <div aria-hidden="true" className="absolute inset-0 rounded-[17.805px] bg-[#1e2030]" />

                    <div className="relative h-[348.47px] w-full overflow-hidden rounded-[13.353px]">
                      <div className="relative h-full w-full overflow-hidden rounded-[13.353px] bg-[#fafbff]">
                        <div className="absolute left-0 top-0 flex h-[50.325px] w-[556.366px] items-center justify-between border-b-[0.742px] border-[#f1f5f9] bg-white pb-[0.742px] pl-[17.876px] pr-[17.732px]">
                          <div className="relative h-[18.496px] w-[94.303px]">
                            <div className="flex items-center gap-[8.935px]">
                              <div className="h-[8.929px] w-[8.936px] rounded-full bg-[#5768fd]" />
                              <p className="font-normal leading-[18.361px] text-[#314158] text-[12.241px]">PrecisionNote</p>
                            </div>
                          </div>
                          <div className="flex h-[22.399px] items-center gap-[8.878px]">
                            <div className="h-[8.972px] w-[71.065px] rounded-full bg-[#f1f5f9]" />
                            <div className="h-[8.938px] w-[44.372px] rounded-full bg-[#f1f5f9]" />
                            <div className="h-[22.239px] w-[22.172px] rounded-full bg-[#5768fd] opacity-80" />
                          </div>
                        </div>

                        <div className="absolute left-0 top-[49.81px] flex h-[299.405px] w-[556.366px] items-start">
                          <div className="relative h-[299.405px] w-[44.68px] border-r-[0.742px] border-[#f1f5f9] bg-white">
                            <div className="flex flex-col items-center gap-[13.365px] pr-[0.742px] pt-[13.39px]">
                              <div className="h-[22.315px] w-[22.34px] rounded-[4.451px] bg-[#5768fd]" />
                              {Array.from({ length: 4 }).map((_, idx) => (
                                <div key={idx} className="h-[22.303px] w-[22.34px] rounded-[4.451px] bg-[#e2e8f0]" />
                              ))}
                            </div>
                          </div>

                          <div className="flex h-[299.305px] min-w-px flex-[459.826_0_0] flex-col gap-[13.204px] pl-[17.864px] pr-[17.732px] pt-[17.85px]">
                            <div className="relative h-[58.501px] w-full">
                              {[
                                { label: 'Sessions Today', value: '8', color: '#5768fd', left: 0, w: 153.134 },
                                { label: 'Notes Pending', value: '3', color: '#f59e0b', left: 162.05, w: 152.764 },
                                { label: 'Hrs Saved', value: '2.4', color: '#10b981', left: 323.7, w: 152.395 },
                              ].map((card) => (
                                <div
                                  key={card.label}
                                  className="absolute top-0 h-[58.385px] rounded-[8.902px] border-[0.742px] border-[#f1f5f9] bg-white"
                                  style={{ left: `${card.left}px`, width: `${card.w}px` }}
                                >
                                  <p className="absolute left-[8.93px] top-[8.92px] text-[11.128px] leading-[16.692px] text-[#90a1b9]">{card.label}</p>
                                  <p className="absolute left-[8.93px] top-[25.64px] text-[15.579px] font-semibold leading-[22.256px]" style={{ color: card.color }}>
                                    {card.value}
                                  </p>
                                </div>
                              ))}
                            </div>

                            <div className="relative flex h-[133.007px] w-full flex-col gap-[8.886px] rounded-[8.902px] border-[0.742px] border-[rgba(87,104,253,0.2)] bg-white pb-[0.742px] pl-[14.139px] pr-[14.041px] pt-[14.12px]">
                              <div className="flex h-[18.396px] w-full items-center justify-between">
                                <p className="text-[12.241px] font-semibold leading-[18.361px] text-[#314158]">Active Scribe</p>
                                <div className="flex items-center gap-[4.436px]">
                                  <div className="h-[6.666px] w-[6.655px] rounded-full bg-[#5768fd] opacity-60" />
                                  <p className="font-mono text-[10.015px] leading-[15.023px] text-[#5768fd]">LIVE</p>
                                </div>
                              </div>

                              <div className="flex h-[53.516px] w-full items-center gap-[3.348px]">
                                {waveformHeights.map((h, idx) => (
                                  <div key={idx} className="w-[3.348px] rounded-full bg-[#5768fd]" style={{ height: `${h}px` }} />
                                ))}
                              </div>

                              <p className="font-mono text-[10.015px] leading-[15.023px] text-[#90a1b9]">Patient: Adaeze O. · 04:23 elapsed</p>
                            </div>

                            <div className="relative flex h-[95.508px] w-full flex-col gap-[6.184px] rounded-[8.902px] border-[0.742px] border-[#f1f5f9] bg-white pb-[0.742px] pl-[14.139px] pr-[14.041px] pt-[14.081px]">
                              {['Subjective', 'Objective', 'Assessment'].map((label) => (
                                <div key={label} className="flex h-[18.334px] w-full items-start gap-[8.919px]">
                                  <p className="w-[71.392px] font-mono text-[10.015px] font-semibold leading-[15.023px] text-[#5768fd]">{label}</p>
                                  <div className="relative h-[18.233px] flex-[330.343_0_0]">
                                    <div className="absolute left-0 top-0 h-[7.095px] w-[367.599px] rounded-full bg-[#f1f5f9]" />
                                    <div className="absolute left-0 top-[11.2px] h-[7.037px] w-[294.239px] rounded-full bg-[#f1f5f9]" />
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="pointer-events-none absolute inset-0 rounded-[inherit] shadow-[inset_0px_0px_0px_1.113px_rgba(255,255,255,0.04)]" />
                  </div>

                  <div className="absolute left-[285.48px] top-[18.2px] h-[8.913px] w-[8.902px] rounded-full bg-[#2a2c3e]" />
                </div>

                <div className="absolute left-[-17.8px] top-[53.41px] flex items-center gap-[10px] rounded-[12px] border-[0.74px] border-[#f1f5f9] bg-white p-[12px] shadow-[0px_22.26px_27.82px_0px_rgba(0,0,0,0.1),0px_8.9px_11.13px_0px_rgba(0,0,0,0.1)]">
                  <div className="flex items-center rounded-[10px] bg-[#ecfdf5] p-[10px]">
                    <span className="relative h-[16px] w-[16px] overflow-hidden">
                      <img alt="" className="absolute inset-[5.21%_13.54%_5.2%_13.54%]" src={shieldSvg} />
                    </span>
                  </div>
                  <div className="flex w-[181px] flex-col gap-[4px]">
                    <p className="text-[12px] font-semibold leading-[16px] text-[#040523]">HIPAA Compliant</p>
                    <p className="font-mono text-[10.015px] leading-[15.023px] text-[#90a1b9]">AES-256 · End-to-end encrypted</p>
                  </div>
                </div>

                <div className="absolute left-[424.34px] top-[98.11px] flex flex-col gap-[15px] rounded-[12px] border-[0.74px] border-[#fef3c6] bg-white p-[20px] shadow-[0px_13.35px_44.51px_0px_rgba(245,158,11,0.18)]">
                  <div className="flex flex-col gap-[12px]">
                    <div className="flex items-center gap-[8px]">
                      <div className="h-[8.902px] w-[8.902px] rounded-full bg-[#ffb900]" />
                      <p className="font-mono text-[12px] uppercase tracking-[1.2241px] text-[#e17100]">Shared Note</p>
                    </div>
                    <p className="w-[194.737px] text-[14px] leading-[20px] text-[#314158]">
                      SOAP note ready — reviewed by Dr. Adebayo. Awaiting your sign-off.
                    </p>
                  </div>

                  <div className="flex w-[183px] items-center justify-between">
                    <div className="relative h-[22.256px] w-[57.865px]">
                      <div className="absolute left-0 top-0 h-[22.256px] w-[22.256px] rounded-full border-[2.226px] border-white bg-[#5768fd]" />
                      <div className="absolute left-[17.81px] top-0 h-[22.256px] w-[22.256px] rounded-full border-[2.226px] border-white bg-[#f59e0b]" />
                      <div className="absolute left-[35.61px] top-0 h-[22.256px] w-[22.256px] rounded-full border-[2.226px] border-white bg-[#10b981]" />
                    </div>
                    <p className="text-[11.128px] leading-[16.692px] text-[#90a1b9]">2m ago</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
