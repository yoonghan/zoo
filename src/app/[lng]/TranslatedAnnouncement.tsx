import { Announcement } from "@/components/Announcement"
import { withComponentTranslator } from "@/components/util/hook/disableVersioning/hoc/withComponentTranslator"
import { withTranslator } from "@/components/util/hook/disableVersioning/hoc/withTranslator"
import { TFunction } from "i18next"


const TranslatedAnnouncementComponent = withComponentTranslator(({t}: {t: TFunction<string, string>}) => {
  const zooAnnouncement: string[] = t('announcements', {returnObjects: true}) as string[]
  return <Announcement
            announcements={zooAnnouncement}
            ariaAnnouncementTitle="Zoo Announcement"
          />
})

export const TranslatedAnnouncement = withTranslator(({t}: {t: TFunction<string, string>}) => <TranslatedAnnouncementComponent t={t} />)
