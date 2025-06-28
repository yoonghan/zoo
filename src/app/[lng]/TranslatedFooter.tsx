import { Footer, FooterProps } from "@/components/Footer"
import { withComponentTranslator } from "@/components/util/hook/disableVersioning/hoc/withComponentTranslator"
import { TranslatorProps, withTranslator } from "@/components/util/hook/disableVersioning/hoc/withTranslator"
import { zooProfile } from "@/config/profile"
import { TFunction } from "i18next"


const translateOperatingTime = (t: TFunction<string, string>): FooterProps['operatingTime'] => ({
    ...zooProfile.operatingTime,
    day: {
        from: t(zooProfile.operatingTime.day.from),
        to: t(zooProfile.operatingTime.day.to)
    },
    lastAdmissionTime: t('footer.lastAdmission', { time: zooProfile.operatingTime.lastAdmissionTime })
})

const TranslatedFooterComponent = withComponentTranslator(({ t, lng }: TranslatorProps) => {
    return <Footer
        language={lng}
        operatingTime={translateOperatingTime(t)}
        address={zooProfile.address}
        companyName={"Walcron"}
        partners={zooProfile.partners}
        labels={
            {
                operationHours: t('footer.operationHours'),
                address: t('footer.address'),
                partners: t('footer.partners'),
                maintainedInfo: t('footer.maintainedInfo'),
                contactUs: t('footer.contactUs'),
                careers: t('footer.careers'),
                faq: t('footer.faq')
            }
        }
    />
})

export const TranslatedFooter = withTranslator(({ t, lng }: TranslatorProps) => <TranslatedFooterComponent t={t} lng={lng} />)
