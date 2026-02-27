/**
 * Mock contacts data for onboarding prototype
 * Ordered by destination country popularity (from CSV transaction data)
 */

export interface Contact {
  id: string;
  name: string;
  country: string;
  countryCode: string;
  phoneNumber: string;
  flag: string;
}

// Mock contacts ordered by destination country popularity
export const mockContacts: Contact[] = [
  {
    id: "1",
    name: "Ahmad Nazari",
    country: "Afghanistan",
    countryCode: "AF",
    phoneNumber: "+93 70 123 4567",
    flag: "🇦🇫",
  },
  {
    id: "2",
    name: "Maria Rodriguez",
    country: "United States",
    countryCode: "US",
    phoneNumber: "+1 555 234 5678",
    flag: "🇺🇸",
  },
  {
    id: "3",
    name: "Carlos Hernandez",
    country: "Cuba",
    countryCode: "CU",
    phoneNumber: "+53 5 234 5678",
    flag: "🇨🇺",
  },
  {
    id: "4",
    name: "Sarah Thompson",
    country: "United Kingdom",
    countryCode: "GB",
    phoneNumber: "+44 7700 900123",
    flag: "🇬🇧",
  },
  {
    id: "5",
    name: "Priya Sharma",
    country: "India",
    countryCode: "IN",
    phoneNumber: "+91 98765 43210",
    flag: "🇮🇳",
  },
  {
    id: "6",
    name: "David Chen",
    country: "Canada",
    countryCode: "CA",
    phoneNumber: "+1 416 555 0123",
    flag: "🇨🇦",
  },
  {
    id: "7",
    name: "Grace Wanjiku",
    country: "Kenya",
    countryCode: "KE",
    phoneNumber: "+254 712 345678",
    flag: "🇰🇪",
  },
  {
    id: "8",
    name: "Tendai Moyo",
    country: "Zimbabwe",
    countryCode: "ZW",
    phoneNumber: "+263 77 123 4567",
    flag: "🇿🇼",
  },
  {
    id: "9",
    name: "Marcus Brown",
    country: "Jamaica",
    countryCode: "JM",
    phoneNumber: "+1 876 555 1234",
    flag: "🇯🇲",
  },
  {
    id: "10",
    name: "Isabella Lopez",
    country: "Mexico",
    countryCode: "MX",
    phoneNumber: "+52 55 1234 5678",
    flag: "🇲🇽",
  },
  {
    id: "11",
    name: "Hans Mueller",
    country: "Germany",
    countryCode: "DE",
    phoneNumber: "+49 170 1234567",
    flag: "🇩🇪",
  },
  {
    id: "12",
    name: "Chidi Okonkwo",
    country: "Nigeria",
    countryCode: "NG",
    phoneNumber: "+234 803 123 4567",
    flag: "🇳🇬",
  },
  {
    id: "13",
    name: "Emma Wilson",
    country: "Australia",
    countryCode: "AU",
    phoneNumber: "+61 412 345 678",
    flag: "🇦🇺",
  },
  {
    id: "14",
    name: "Amir Hosseini",
    country: "Iran",
    countryCode: "IR",
    phoneNumber: "+98 912 345 6789",
    flag: "🇮🇷",
  },
  {
    id: "15",
    name: "Fatima Benali",
    country: "Algeria",
    countryCode: "DZ",
    phoneNumber: "+213 555 12 34 56",
    flag: "🇩🇿",
  },
  {
    id: "16",
    name: "Yonas Haile",
    country: "Ethiopia",
    countryCode: "ET",
    phoneNumber: "+251 91 123 4567",
    flag: "🇪🇹",
  },
  {
    id: "17",
    name: "Sofia Restrepo",
    country: "Colombia",
    countryCode: "CO",
    phoneNumber: "+57 310 123 4567",
    flag: "🇨🇴",
  },
  {
    id: "18",
    name: "Pierre Dubois",
    country: "France",
    countryCode: "FR",
    phoneNumber: "+33 6 12 34 56 78",
    flag: "🇫🇷",
  },
  {
    id: "19",
    name: "Li Wei",
    country: "China",
    countryCode: "CN",
    phoneNumber: "+86 138 1234 5678",
    flag: "🇨🇳",
  },
  {
    id: "20",
    name: "Amanuel Tesfay",
    country: "Eritrea",
    countryCode: "ER",
    phoneNumber: "+291 7 123 4567",
    flag: "🇪🇷",
  },
];

export default mockContacts;
