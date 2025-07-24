import { Announcement } from "@/components/Announcement"
import { withComponentTranslator } from "@/components/util/hoc/withComponentTranslator"
import { TranslatorProps, withTranslator } from "@/components/util/hoc/withTranslator"


const TranslatedAnnouncementComponent = withComponentTranslator(({ t }: Readonly<TranslatorProps>) => {
  const zooAnnouncement: string[] = t('announcements', { returnObjects: true }) as string[]
  return <Announcement
    announcements={zooAnnouncement}
    ariaAnnouncementTitle="Zoo Announcement"
  />
})

export const TranslatedAnnouncement = withTranslator(({ t, lng }: Readonly<TranslatorProps>) => <TranslatedAnnouncementComponent t={t} lng={lng} />)
