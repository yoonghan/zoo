import { Announcement } from "@/components/Announcement"
import { withComponentTranslator } from "@/components/util/hoc/withComponentTranslator"
import { TranslatorProps, withTranslator } from "@/components/util/hoc/withTranslator"


const TranslatedAnnouncementComponent = withComponentTranslator(({ t }: TranslatorProps) => {
  const zooAnnouncement: string[] = t('announcements', { returnObjects: true }) as string[]
  return <Announcement
    announcements={zooAnnouncement}
    ariaAnnouncementTitle="Zoo Announcement"
  />
})

export const TranslatedAnnouncement = withTranslator(({ t, lng }: TranslatorProps) => <TranslatedAnnouncementComponent t={t} lng={lng} />)
