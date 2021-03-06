/* tslint:disable:only-arrow-functions */
import Sequelize from "sequelize";
import { EmployeeProperties } from "../../@types";
import { sequelize } from "../app";
// interface EmployeeModel {
// 	_id: Sequelize.STRING,
// 	id: Sequelize.STRING,
// 	umcn: Sequelize.STRING,
// 	passport: Sequelize.STRING,
// 	firstName: Sequelize.STRING,
// 	lastName: Sequelize.STRING,
// 	middleName: Sequelize.STRING,
// 	typeReceiver: Sequelize.STRING,
// 	typeEmployment: Sequelize.STRING,
// 	typeEmployee: Sequelize.STRING,
// 	employmentUnit: Sequelize.STRING,
// 	employmentSection: Sequelize.STRING,
// 	employmentPosition: Sequelize.STRING,
// 	rating: Sequelize.STRING,
// 	group: Sequelize.STRING,
// 	realQualification: Sequelize.STRING,
// 	verifiedQualification: Sequelize.STRING,
// 	points: Sequelize.STRING,
// 	average1: Sequelize.STRING,
// 	average2: Sequelize.STRING,
// 	average3: Sequelize.STRING,
// 	allowanceMeal: Sequelize.STRING,
// 	allowanceInsurance: Sequelize.STRING,
// 	transportAllowanceCategory1: Sequelize.STRING,
// 	transportAllowanceCategory2: Sequelize.STRING,
// 	transportAllowanceCategory3: Sequelize.STRING,
// 	hours: Sequelize.STRING,
// 	amount: Sequelize.STRING,
// 	coefficient1: Sequelize.STRING,
// 	percentage: Sequelize.STRING,
// 	coefficient2: Sequelize.STRING,
// 	reducedYoS: Sequelize.STRING,
// 	municipalityEmployment: Sequelize.STRING,
// 	municipalityResidency: Sequelize.STRING,
// 	municipalityPayout1: Sequelize.STRING,
// 	municipalityPayout2: Sequelize.STRING,
// 	accountPayout1: Sequelize.STRING,
// 	accountPayout2: Sequelize.STRING,
// 	employmentBooklet_SerialNumber: Sequelize.STRING,
// 	employmentBooklet_RegistryNumber: Sequelize.STRING,
// 	employmentBooklet_DateOfIssue: Sequelize.STRING,
// 	employmentBooklet_Municipality: Sequelize.STRING,
// 	employmentBooklet_EmploymentCode: Sequelize.STRING,
// 	// externalYoS_periods: YoSPeriod[],
// 	externalYoS_total: Sequelize.NUMBER,
// 	// internalYoS_periods: YoSPeriod[],
// 	internalYoS_total: Sequelize.NUMBER,
// 	totalYoS: Sequelize.NUMBER,
// 	address: Sequelize.STRING,
// 	zip: Sequelize.STRING,
// 	municipality: Sequelize.STRING,
// 	sex: Sequelize.STRING,
// 	dateOfBirth: Sequelize.STRING,
// 	idSerialNumber: Sequelize.STRING,
// 	idRegistryNumber: Sequelize.STRING,
// 	idDateOfIssue: Sequelize.STRING,
// 	idMunicipalityOfIssue: Sequelize.STRING,
// 	healthInsuranceSerialNumber: Sequelize.STRING,
// 	healthInsuranceRegistryNumber: Sequelize.STRING,
// 	healthInsuranceDateOfIssue: Sequelize.STRING,
// 	healthInsuranceMunicipalityOfIssue: Sequelize.STRING,
// 	familyMembers: Sequelize.STRING,
// 	numberOfKids: Sequelize.STRING,
// 	email: Sequelize.STRING,
// 	comment: Sequelize.STRING
// }
type EmployeeDBMethods = "update" | "insert" | "remove" | "get" | "get-all";
export const execute = async (method: EmployeeDBMethods, e ?: EmployeeProperties) => {
	let employee;
	if (method != "remove" && e) {
		employee = {
			_id: e._id,
			id: e.id,
			umcn: e.umcn,
			passport: e.passport,
			firstName: e.firstName,
			lastName: e.lastName,
			middleName: e.middleName,
			typeReceiver: e.typeReceiver,
			typeEmployment: e.typeEmployment,
			typeEmployee: e.typeEmployee,
			employmentUnit: e.employmentUnit,
			employmentSection: e.employmentSection,
			employmentPosition: e.employmentPosition,
			rating: e.rating,
			group: e.group,
			realQualification: e.realQualification,
			verifiedQualification: e.verifiedQualification,
			points: e.points,
			average1: e.average1,
			average2: e.average2,
			average3: e.average3,
			allowanceMeal: e.allowanceMeal,
			allowanceInsurance: e.allowanceInsurance,
			transportAllowanceCategory1: e.transportAllowanceCategory1,
			transportAllowanceCategory2: e.transportAllowanceCategory2,
			transportAllowanceCategory3: e.transportAllowanceCategory3,
			hours: e.hours,
			amount: e.amount,
			coefficient1: e.coefficient1,
			percentage: e.percentage,
			coefficient2: e.coefficient2,
			reducedYoS: e.reducedYoS,
			municipalityEmployment: e.municipalityEmployment,
			municipalityResidency: e.municipalityResidency,
			municipalityPayout1: e.municipalityPayout1,
			municipalityPayout2: e.municipalityPayout2,
			accountPayout1: e.accountPayout1,
			accountPayout2: e.accountPayout2,
			employmentBooklet_SerialNumber: e.employmentBooklet_SerialNumber,
			employmentBooklet_RegistryNumber: e.employmentBooklet_RegistryNumber,
			employmentBooklet_DateOfIssue: e.employmentBooklet_DateOfIssue,
			employmentBooklet_Municipality: e.employmentBooklet_Municipality,
			employmentBooklet_EmploymentCode: e.employmentBooklet_EmploymentCode,
			externalYoS_periods: e.externalYoS_periods,
			externalYoS_total: e.externalYoS_total,
			internalYoS_periods: e.internalYoS_periods,
			internalYoS_total: e.internalYoS_total,
			totalYoS: e.totalYoS,
			address: e.address,
			zip: e.zip,
			municipality: e.municipality,
			sex: e.sex,
			dateOfBirth: e.dateOfBirth,
			idSerialNumber: e.idSerialNumber,
			idRegistryNumber: e.idRegistryNumber,
			idDateOfIssue: e.idDateOfIssue,
			idMunicipalityOfIssue: e.idMunicipalityOfIssue,
			healthInsuranceSerialNumber: e.healthInsuranceSerialNumber,
			healthInsuranceRegistryNumber: e.healthInsuranceRegistryNumber,
			healthInsuranceDateOfIssue: e.healthInsuranceDateOfIssue,
			healthInsuranceMunicipalityOfIssue: e.healthInsuranceMunicipalityOfIssue,
			familyMembers: e.familyMembers,
			numberOfKids: e.numberOfKids,
			email: e.email,
			comment: e.comment
		};
	}
	switch (method) {
		case "update":
			try {
				return await EmployeeModel.update(employee);
			} catch (err) {
				throw new Error(err.message);
			}
		case "insert":
			try {
				return await EmployeeModel.insertOrUpdate(employee);
			} catch (err) {
				throw new Error(err.message);
			}
		case "get-all":
			try {
				return await EmployeeModel.findAll();
			} catch (err) {
				throw new Error(err.message);
			}
		case "remove":
			try {
				const res: any = await EmployeeModel.findOne({where: {_id: e._id}});
				await res.destroy();
				return res;
			} catch (err) {
				throw new Error(err.message);
			}
	}
};

export const EmployeeModel = sequelize.define("Employee", {
	_id: {type: Sequelize.STRING, primaryKey: true},
	id: Sequelize.STRING,
	umcn: Sequelize.STRING,
	passport: Sequelize.STRING,
	firstName: Sequelize.STRING,
	lastName: Sequelize.STRING,
	middleName: Sequelize.STRING,
	typeReceiver: Sequelize.STRING,
	typeEmployment: Sequelize.STRING,
	typeEmployee: Sequelize.STRING,
	employmentUnit: Sequelize.STRING,
	employmentSection: Sequelize.STRING,
	employmentPosition: Sequelize.STRING,
	rating: Sequelize.STRING,
	group: Sequelize.STRING,
	realQualification: Sequelize.STRING,
	verifiedQualification: Sequelize.STRING,
	points: Sequelize.STRING,
	average1: Sequelize.STRING,
	average2: Sequelize.STRING,
	average3: Sequelize.STRING,
	allowanceMeal: Sequelize.STRING,
	allowanceInsurance: Sequelize.STRING,
	transportAllowanceCategory1: Sequelize.STRING,
	transportAllowanceCategory2: Sequelize.STRING,
	transportAllowanceCategory3: Sequelize.STRING,
	hours: Sequelize.STRING,
	amount: Sequelize.STRING,
	coefficient1: Sequelize.STRING,
	percentage: Sequelize.STRING,
	coefficient2: Sequelize.STRING,
	reducedYoS: Sequelize.STRING,
	municipalityEmployment: Sequelize.STRING,
	municipalityResidency: Sequelize.STRING,
	municipalityPayout1: Sequelize.STRING,
	municipalityPayout2: Sequelize.STRING,
	accountPayout1: Sequelize.STRING,
	accountPayout2: Sequelize.STRING,
	employmentBooklet_SerialNumber: Sequelize.STRING,
	employmentBooklet_RegistryNumber: Sequelize.STRING,
	employmentBooklet_DateOfIssue: Sequelize.STRING,
	employmentBooklet_Municipality: Sequelize.STRING,
	employmentBooklet_EmploymentCode: Sequelize.STRING,
	externalYoS_periods: Sequelize.TEXT,
	externalYoS_total: Sequelize.BIGINT,
	internalYoS_periods: Sequelize.TEXT,
	internalYoS_total: Sequelize.BIGINT,
	totalYoS: Sequelize.BIGINT,
	address: Sequelize.STRING,
	zip: Sequelize.STRING,
	municipality: Sequelize.STRING,
	sex: Sequelize.STRING,
	dateOfBirth: Sequelize.STRING,
	idSerialNumber: Sequelize.STRING,
	idRegistryNumber: Sequelize.STRING,
	idDateOfIssue: Sequelize.STRING,
	idMunicipalityOfIssue: Sequelize.STRING,
	healthInsuranceSerialNumber: Sequelize.STRING,
	healthInsuranceRegistryNumber: Sequelize.STRING,
	healthInsuranceDateOfIssue: Sequelize.STRING,
	healthInsuranceMunicipalityOfIssue: Sequelize.STRING,
	familyMembers: Sequelize.STRING,
	numberOfKids: Sequelize.STRING,
	email: Sequelize.STRING,
	comment: Sequelize.STRING
});
